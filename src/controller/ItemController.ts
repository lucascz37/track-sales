import Item from '../entity/Item';
import ItemService from '../service/ItemService';
import BaseController from './BaseController';

class ItemController extends BaseController<Item> {}

export default new ItemController(ItemService);
