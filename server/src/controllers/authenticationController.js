import {User} from '../model';
import { getTokenById, getIdByToken } from '../business/authentication';

const authenticationController = {
    registration: async ctx => {
        const {email, password} = ctx.request.body;
        if(await User.findOne({ email })) {
            ctx.status = 401;
        } else {
            const user = new User({
                email,
                password
            });
            await user.save();
            ctx.body = {status: "OK"};
        }
	},
	login: async ctx => {
		const { email, password } = ctx.request.body;
		const user = await User.findOne({ email });
		if (!user || user.password !== password) {
			ctx.status = 401;
		} else {
            const token = await getTokenById(user._id);
            ctx.body = {
                token: 'JWT ' + token,
                user: {
                    email: user.email,
                    firstName: user.firstName,
                    secondName: user.secondName,
                    lastName: user.lastName,
                    phone: user.phone,
                    email: user.email,
                },
            };
        }
	},
    relogin: async ctx => {
		const id = await getIdByToken(ctx.headers); 
		const user = await User.findById(id);
		if (!user) {
            ctx.status = 401;
        } else {
            ctx.body = {
                user: {
                    email: user.email,
                    firstName: user.firstName,
                    secondName: user.secondName,
                    lastName: user.lastName,
                    phone: user.phone,
                    email: user.email,
                },
            };
        }
	},
};

export default authenticationController;
