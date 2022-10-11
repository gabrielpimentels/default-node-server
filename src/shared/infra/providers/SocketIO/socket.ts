/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

import socketIO, { Socket } from 'socket.io';

import socketService from '@modules/services/socket/SocketService';

import { IChatDTO } from '@modules/dtos/sockets/IChatDTO';

export const connectClient = (client: Socket, _io: socketIO.Server) => {
  console.log('connected', client.id);
};

export const message = (client: Socket, _io: socketIO.Server) => {
  client.on('message', (data: IChatDTO) => {
    socketService.saveMessage(data);
    _io.emit('new-message', data);
  });
};

export const disconnect = (client: Socket, _io: socketIO.Server) => {
  client.on('disconnect', () => {
    console.log('disconnected', client.id);
  });
};

export default socketIO;
