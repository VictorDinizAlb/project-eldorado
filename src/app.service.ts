import { Inject, Injectable } from '@nestjs/common';
import { getCustomRepository, getRepository, Repository } from 'typeorm';
import { DeviceService } from './device/device.service';
import { Device } from './device/entities/device.entity';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public async listarTodos(): Promise<Device[]> {
    const repo = getRepository(Device);
    const deviceService = new DeviceService(repo);

    return await deviceService.findAll();
  }
}
