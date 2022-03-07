import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DeviceController } from './device.controller';
import { deviceProviders } from './device.providers';
import { DeviceService } from './device.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DeviceController],
  providers: [
    ...deviceProviders,
    DeviceService,
  ],
})
export class DeviceModule {}