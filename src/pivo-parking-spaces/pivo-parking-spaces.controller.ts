import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PivoParkingSpacesService } from './pivo-parking-spaces.service';
import { PivoParkingSpaceDto } from './dto/pivo-parking-space.dto';

@Controller('pivo-parking-spaces')
export class PivoParkingSpacesController {
  constructor(private readonly pivoParkingSpacesService: PivoParkingSpacesService) {}

  @Post()
  create(@Body() createPivoParkingSpaceDto: PivoParkingSpaceDto) {
    return this.pivoParkingSpacesService.create(createPivoParkingSpaceDto);
  }

  @Get()
  findAll() {
    return this.pivoParkingSpacesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pivoParkingSpacesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePivoParkingSpaceDto: PivoParkingSpaceDto) {
    return this.pivoParkingSpacesService.update(+id, updatePivoParkingSpaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pivoParkingSpacesService.remove(+id);
  }
}
