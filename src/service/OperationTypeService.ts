import BaseService from './BaseService';
import OperationType from '../entity/OperationType';

class OperationTypeService extends BaseService<OperationType> {}

export default new OperationTypeService(OperationType);
