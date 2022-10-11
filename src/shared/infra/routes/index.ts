import { Router } from 'express';

import { authRouter } from '@modules/routes/auth';
import { advertiseRouter } from '@modules/routes/advertise/advertise.routes';
import { chatRouter } from '@modules/routes/sockets/chat.routes';

const routes = Router();

// Domain: auth
routes.use('/auth', authRouter);

// Domain: advertise
routes.use('/advertise', advertiseRouter);

// Domain: Chat
routes.use('/chat', chatRouter);

export default routes;
