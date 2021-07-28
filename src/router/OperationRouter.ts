import { Router } from 'express';
import OperationController from '../controller/OperationController';

const router = Router();

export default router
	.get('/:id', (req, resp) => OperationController.getOperationPage(req, resp))
	.post('/', (req, resp) => OperationController.create(req, resp))
	.delete('/:id', (req, resp) => OperationController.delete(req, resp));
