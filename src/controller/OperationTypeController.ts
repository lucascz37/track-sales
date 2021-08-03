import OperationType from '../entity/OperationType';
import OperationTypeService from '../service/OperationTypeService';
import BaseController from './BaseController';

class OperationTypeController extends BaseController<OperationType> {}

export default new OperationTypeController(OperationTypeService);
