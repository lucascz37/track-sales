import {
	DeleteResult,
	getRepository,
	InsertResult,
	Repository,
	UpdateResult,
} from 'typeorm';
import { EntityFieldsNames } from 'typeorm/common/EntityFieldsNames';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export default class BaseService<T> {
	repository: Repository<T>;

	constructor(model: new () => T) {
		this.repository = getRepository(model);
	}

	async findAll(): Promise<T[]> {
		return this.repository.find();
	}

	async findPage(
		page: number,
		order: {
			[P in EntityFieldsNames<T>]?: 'ASC' | 'DESC' | 1 | -1;
		},
	): Promise<T[]> {
		const skip = page * 10 - 10;
		return this.repository.find({ take: 10, skip, order });
	}

	async create(object: T): Promise<InsertResult> {
		return this.repository.insert(object);
	}

	async update(
		id: number,
		object: QueryDeepPartialEntity<T>,
	): Promise<UpdateResult> {
		return this.repository.update(id, object);
	}

	async findById(id: number): Promise<T | undefined> {
		return this.repository.findOne(id);
	}

	async deleteById(id: number): Promise<DeleteResult> {
		return this.repository.delete(id);
	}
}
