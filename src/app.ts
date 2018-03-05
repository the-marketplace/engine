// Side effects imports
import 'libs/dotenv';
import 'libs/postgres';

import * as Express from 'express';
import * as cors from 'cors';
import { initGraphQL } from './libs/graphql';

const app = Express();

// Initializing middlewares
const corsConfig = cors({ origin: true, credentials: true });

const graphQLConfig = initGraphQL();

app.use(corsConfig);
app.use('/', graphQLConfig);
app.use((err: any, req: any, res: any, next: any) => {
	console.log(req);
	if (res.headersSent) {
		next(err);
	} else {
		console.error(err);
		res.status(err.status || 500).send({
			errors: [err],
			data: {},
		});
	}
});

// Start the server
app.listen(Number(process.env.APP_PORT), '0.0.0.0', () => {
	console.log('theMarketplace GraphQL Server is up and running');
	console.log(`Listening on port ${process.env.APP_PORT}`);

	// if (process.env.SECURITY === 'legacy') {
	// 	console.log(`Environment : ${process.env.NODE_ENV} - Bypassing Auth0`);
	// } else {
	// 	console.log(`Environment : ${process.env.NODE_ENV}`);
	// }
});

// Log unhandled rejections, or initialization failures
process.on('unhandledRejection', (err: any) => console.log(err));

export default app;
