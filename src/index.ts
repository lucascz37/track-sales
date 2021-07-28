import createConnection from './database/connection';
import 'reflect-metadata';

createConnection.then(async () => {
	const application = await import('./app');
	// eslint-disable-next-line new-cap
	const app = new application.default(3000);
	app.run();
});
