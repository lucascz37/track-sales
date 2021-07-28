import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class OperationType {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 50, nullable: false })
	type: string;
}
