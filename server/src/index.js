import Koa from 'koa';
import passport from 'passport';
import bodyParser from 'koa-bodyparser';

import { connectDb } from './model';
import { PORT } from '../config.json';

connectDb();

const app = new Koa();

app.use(bodyParser());

app.listen(PORT, () => {
	console.log(`Server started (Port: ${PORT})`);
});
