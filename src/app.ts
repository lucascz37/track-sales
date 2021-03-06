import express, { Express, Router } from 'express';
import helmet from 'helmet';
import ItemRouter from './router/ItemRouter';
import OperationRouter from './router/OperationRouter';
import OperationTypeRouter from './router/OperationTypeRouter';

export default class Application {
	server: Express;

	port: number;

	constructor(port: number) {
		this.server = express();
		this.server.use(helmet());
		this.server.use(express.json());
		this.port = port;
		this.addRouters();
	}

	addRouters(): void {
		this.addRouter('/operation', OperationRouter);
		this.addRouter('/operationType', OperationTypeRouter);
		this.addRouter('/item', ItemRouter);
	}

	addRouter(path: string, router: Router): void {
		this.server.use(path, router);
	}

	run(): void {
		this.server.listen(this.port, () =>
			// eslint-disable-next-line no-console
			console.log(`Running on ${this.port}`),
		);
	}
}
