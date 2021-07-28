import { Request, Response } from 'express';
import Operation from '../entity/Operation';
import BaseController from './BaseController';

class OperationController extends BaseController<Operation> {
	async getOperationPage(req: Request, resp: Response) {
		const page = Number(req.params.id);
		const result = await this.service.findPage(page, { saved: 'DESC' });

		resp.status(200).json({ data: result });
	}
}

export default new OperationController(Operation);
