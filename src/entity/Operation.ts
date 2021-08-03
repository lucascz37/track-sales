import {
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import Item from './Item';
import OperationType from './OperationType';

@Entity()
export default class Operation {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Item, { nullable: false, eager: true })
	item: Item;

	@CreateDateColumn()
	saved: Date;

	@ManyToOne(() => OperationType, { nullable: false, eager: true })
	operationType: OperationType;
}
