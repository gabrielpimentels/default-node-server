/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
import 'express-async-errors';

import express, { Application, Request, Response, NextFunction } from 'express';

import cors from 'cors';
import morgan from 'morgan';
import http from 'http';

import routes from '@shared/infra/routes';

import IExpressProvider from '../interfaces/IExpressProvider';

import socketIO, { Server, Socket } from 'socket.io';

import * as socket from '../../SocketIO/socket';
import { AppError } from '@shared/errors/AppError';

class Express implements IExpressProvider {
  private app: Application;

  private port: string | number;

  private server: http.Server;

  public io: socketIO.Server;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;
    this.createServer();

    this.io = new Server(this.server, {
      cors: {
        origin: ['http://localhost:3000', 'http://localhost:4201'],
      },
      pingInterval: 5000,
      perMessageDeflate: false,
    });

    this.listeningsockets();
  }

  private listeningsockets() {
    this.io.on('connection', (client: Socket) => {
      socket.connectClient(client, this.io);
      socket.disconnect(client, this.io);
      socket.message(client, this.io);
    });
  }

  public async init(): Promise<void> {
    await this.use();

    this.server.listen(this.port, () => {
      console.log('+---------------------------------------+');
      console.log('|                                       |');
      console.log('|              Aurora API               |');
      console.log(`|   🚀 Server ready at localhost:${this.port}   |`);
      console.log('|                                       |');
      console.log('\x1b[37m+---------------------------------------+');
    });
  }

  private async createServer(): Promise<void> {
    this.server = http.createServer(this.app);
  }

  private async use(): Promise<void> {
    this.app.use(
      cors({
        origin: ['http://localhost:4200', 'http://localhost:4201'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        exposedHeaders: ['x-auth-token'],
      }),
    );

    this.app.use((req: Request, res: Response, next: NextFunction): void => {
      express.json()(req, res, next);
    });

    this.app.use(morgan('dev'));
    this.app.use(routes);

    this.app.use('*', (_request: Request, response: Response) => {
      return response.status(404).json({
        success: false,
        message: `API endpoint doesn't exist`,
      });
    });

    this.app.use(
      (err: Error, _request: Request, response: Response, _: NextFunction) => {
        if (err instanceof AppError) {
          const { statusCode, title, description } = err;

          return response.status(statusCode).json({
            status: 'error',
            title,
            description,
          });
        }

        return response.status(500).json({
          status: 'error',
          message: 'Internal server error',
        });
      },
    );
  }
}

export default new Express();
