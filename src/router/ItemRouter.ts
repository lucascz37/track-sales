import { Router } from 'express';
import ItemController from '../controller/ItemController';

const router = Router();

export default router
	.get('/', (req, resp) => ItemController.find(req, resp))
	.post('/', (req, resp) => ItemController.create(req, resp))
	.delete('/:id', (req, resp) => ItemController.delete(req, resp));
