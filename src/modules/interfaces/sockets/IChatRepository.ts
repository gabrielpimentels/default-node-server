import { IChatDTO } from '@modules/dtos/sockets/IChatDTO';
import { IChatModelDocument } from '@modules/models/sockets/IChatModelDocument';

export interface IChatRepository {
  create(data: IChatDTO): Promise<IChatModelDocument>;
  getAll(sentTo: string): Promise<IChatModelDocument[] | null>;
}
