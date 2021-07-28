import { createConnection } from 'typeorm';
import Operation from '../entity/Operation';
import OperationType from '../entity/OperationType';

export default createConnection({
	type: 'better-sqlite3',
	database: './src/database/database.sqlite',
	logging: true,
	entities: [OperationType, Operation],
	synchronize: true,
});
