import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import OperationType from './OperationType';

@Entity()
export default class Operation {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 140, nullable: false })
	name: string;

	@CreateDateColumn()
	saved: Date;

	@ManyToOne(() => OperationType, { nullable: false })
	operationType: OperationType;
}
