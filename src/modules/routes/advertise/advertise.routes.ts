import { Router } from 'express';

import { AdvertiseController } from '@modules/controllers/advertise/AdvertiseController';

export const advertiseRouter = Router();

const advertiseController = new AdvertiseController();

advertiseRouter.post('/', advertiseController.getAll);
advertiseRouter.get('/:advertise_id', advertiseController.getOne);
advertiseRouter.post('/create', advertiseController.create);
advertiseRouter.put('/update', advertiseController.update);
