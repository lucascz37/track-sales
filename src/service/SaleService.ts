import Operation from '../entity/Operation';
import BaseService from './BaseService';

class OperationService extends BaseService<Operation> {}

export default new OperationService(Operation);
