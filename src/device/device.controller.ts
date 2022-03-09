import { Controller, Get, Post, Body, Query, Param, Delete, ValidationPipe } from '@nestjs/common';
import { Category } from 'src/category/entities/category.entity';
import { getRepository } from 'typeorm';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { Device } from './entities/device.entity';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) { }
  
  @Get()
  async findAll(): Promise<Device[]> {
    return await this.deviceService.findAll();
  }

  @Get('search/:id')
  async findOne(@Param('id') id: number): Promise<Device> {
    return await this.deviceService.findOne(+id);
  }
  
  @Get(':categoryId')
  async findByCategory(@Param('categoryId') categoryId: number): Promise<Device[]> {
    return await this.deviceService.findByCategory(+categoryId);
  }

  @Post()
  async create(@Body(ValidationPipe) createDeviceDto: CreateDeviceDto): Promise<Device[] | boolean> {
    return await this.deviceService.create(createDeviceDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
  //   return this.deviceService.update(+id, updateDeviceDto);
  // }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string): Promise<Device[]> {
    return await this.deviceService.remove(+id);
  }
}
