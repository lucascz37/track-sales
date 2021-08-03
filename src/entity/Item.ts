import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Item {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 50, nullable: false })
	name: string;
}
