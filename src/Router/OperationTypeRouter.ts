import { Router } from 'express';
import OperationTypeController from '../controller/OperationTypeController';

const router = Router();

export default router
	.get('/', (req, resp) => OperationTypeController.find(req, resp))
	.post('/', (req, resp) => OperationTypeController.create(req, resp))
	.delete('/:id', (req, resp) => OperationTypeController.delete(req, resp));
