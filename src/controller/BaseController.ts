import { Request, Response } from 'express';
import BaseService from '../service/BaseService';

export default class BaseController<T> {
	service: BaseService<T>;

	constructor(service: BaseService<T>) {
		this.service = service;
	}

	async find(req: Request, resp: Response): Promise<void> {
		const data = await this.service.findAll();
		resp.status(200).json({ data });
	}

	async create(req: Request, resp: Response): Promise<void> {
		const object = req.body as T;

		this.service
			.create(object)
			.then(result => {
				resp.status(200).json({ id: result.identifiers, ...object });
			})
			.catch(() => {
				resp.status(400).json({ message: 'invalid object' });
			});
	}

	async delete(req: Request, resp: Response): Promise<void> {
		const id = Number(req.params.id);
		const object = await this.service.findById(id);

		if (object !== undefined) {
			const result = await this.service.deleteById(id);
			// eslint-disable-next-line no-unused-expressions
			result.affected === 1
				? resp.status(204).send()
				: resp.status(404).json({ message: 'Could not be deleted' });
		} else {
			resp.status(404).json({ message: 'Not Found' });
		}
	}
}
