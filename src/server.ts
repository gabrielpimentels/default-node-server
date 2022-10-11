import 'dotenv/config';

import Mongoose from '@shared/infra/providers/Mongoose/implementations/Mongoose';
import Express from '@shared/infra/providers/Express/implementations/Express';

const startServer = async () => {
  await Mongoose.init(process.env.MONGODB_URI!).then(async () =>
    Express.init(),
  );
};

startServer().catch((err: Error) => {
  console.log(err, 'err');
});
