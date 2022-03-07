import { Connection } from 'typeorm';
import { Device } from './entities/device.entity';

export const deviceProviders = [
  {
    provide: 'DEVICE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Device),
    inject: ['DATABASE_CONNECTION'],
  },
];