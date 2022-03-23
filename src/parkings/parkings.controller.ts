import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { ParkingDto } from './dto/parking.dto';
import { ParkingsService } from './parkings.service';


@Controller('parkings')
export class ParkingsController {
  constructor(private readonly parkingsService: ParkingsService) {}

  @Post()
  @ApiBody({ type: ParkingDto })
  create(@Body() createParkingDto: ParkingDto) {
    return this.parkingsService.create(createParkingDto);
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
  @ApiBody({ type: ParkingDto })
  update(@Param('id') id: string, @Body() updateParkingDto: ParkingDto) {
    return this.parkingsService.update(+id, updateParkingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkingsService.remove(+id);
  }
}
