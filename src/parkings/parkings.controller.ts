import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ParkingDto } from './dto/parking.dto';
import { ParkingEntity } from './entities/parking.entity';
import { ParkingsService } from './parkings.service';

@ApiTags('Parkings')
@Controller('parkings')
export class ParkingsController {
  constructor(private readonly parkingsService: ParkingsService) {}

  @Post()
  @ApiBody({ type: ParkingDto })
  create(@Body() parkingData: ParkingEntity) {
    return this.parkingsService.create(parkingData);
  }

  @Get()
  findAll() {
    return this.parkingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.parkingsService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: ParkingEntity })
  update(@Param('id') id: string, @Body() parkingData: ParkingEntity) {
    return this.parkingsService.update(+id, parkingData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkingsService.remove(+id);
  }
}
