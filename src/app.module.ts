import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CategoryModule } from './category/category.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [
    CategoryModule,
    DeviceModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
