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
			this.service
				.deleteById(id)
				.then(result => {
					if (result.affected === 1) {
						resp.status(204).send();
					} else {
						resp.status(404).json({
							message: 'Already deleted',
						});
					}
				})
				.catch(() => {
					resp.status(409).json({ message: 'Cannot be deleted' });
				});
		} else {
			resp.status(404).json({ message: 'Not Found' });
		}
	}
}
