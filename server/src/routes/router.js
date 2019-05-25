import passport from 'koa-passport';

const auth = (ctx, next) =>
	passport.authenticate('jwt', { session: false }, async (err, user) => {
		if (user === false) {
			ctx.throw(401);
		}
		await next(ctx);
	})(ctx);