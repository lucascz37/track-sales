import Item from '../entity/Item';
import BaseService from './BaseService';

class ItemService extends BaseService<Item> {}

export default new ItemService(Item);
