/* eslint-disable no-console */
import { connect, ConnectOptions } from 'mongoose';

import IDatabaseProvider from '../interfaces/IDatabaseProvider';

class Mongoose implements IDatabaseProvider {
  /**
   *
   * @param uri receives uri from server.ts and pass to mongoose connect
   */

  public async init(uri: string): Promise<void> {
    await this.connect(uri);
  }

  private async connect(uri: string): Promise<void> {
    await connect(`${uri}`, {} as ConnectOptions);
  }
  // mongoose.connection.on('connected', () => {
  //   console.log('Mongo has connected succesfully')
  // })
  // mongoose.connection.on('reconnected', () => {
  //   console.log('Mongo has reconnected')
  // })
  // mongoose.connection.on('error', error => {
  //   console.log('Mongo connection has an error', error)
  //   mongoose.disconnect()
  // })
  // mongoose.connection.on('disconnected', () => {
  //   console.log('Mongo connection is disconnected')
  // })
}

export default new Mongoose();
