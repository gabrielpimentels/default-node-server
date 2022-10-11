import { Router } from 'express';

import { ChatController } from '@modules/controllers/sockets/chat.controller';

export const chatRouter = Router();

const chatController = new ChatController();

chatRouter.post('/', chatController.getAll);
