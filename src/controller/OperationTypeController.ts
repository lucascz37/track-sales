import OperationType from '../entity/OperationType';
import BaseController from './BaseController';

class OperationTypeController extends BaseController<OperationType> {}

export default new OperationTypeController(OperationType);
