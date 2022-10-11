import { Router } from 'express';

import { SignInController } from '@modules/controllers/auth/SignInController';
import { SignUpController } from '@modules/controllers/auth/SignUpController';

export const authRouter = Router();

const signInController = new SignInController();
const signUpController = new SignUpController();

authRouter.post('/signin', signInController.signin);
authRouter.post('/profile', signInController.getProfile);

authRouter.post('/signup', signUpController.signup);
