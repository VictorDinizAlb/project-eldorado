import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { Device } from './device/entities/device.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/category')
  public listarTodos(){
  }
}
