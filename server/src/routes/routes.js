import Router from 'koa-router';
import passport from 'koa-passport';

import {
	userController,
    parkingController,
    statisticsController,
    authenticationController
} from '../controllers';

const auth = (ctx, next) =>
	passport.authenticate('jwt', { session: false }, async (err, user) => {
		if (user === false) {
			ctx.throw(401);
		}
		await next(ctx);
	})(ctx);

const router = new Router();

router
    .get('/users/:id', auth, userController.readById)
    .put('/users/:id', auth, userController.update)
	.post('/parkings', auth, parkingController.create)
    .get('/parkings', parkingController.read)
    .get('/parkings/:id', parkingController.readById)
    .put('/parkings/:id', auth, parkingController.update)
    .delete('/parkings/:id', auth, parkingController.delete)
    .put('/statistics', statisticsController.add)
    .get('/statistics/:id', auth, statisticsController.readById)
    .post('/registration', authenticationController.registration)
    .post('/login', authenticationController.login)
    .get('/relogin', auth, authenticationController.relogin);

export const routes = () => router.routes();
export const allowedMethods = () => router.allowedMethods();
