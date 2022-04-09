import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PivoParkingSpacesService } from './pivo-parking-spaces.service';
import { PivoParkingSpaceEntity } from './entities/pivo-parking-space.entity';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PivoParkingSpaceDto } from './dto/pivo-parking-space.dto';
@ApiTags('Pivo Parking Spaces')
@Controller('pivo-parking-spaces')
export class PivoParkingSpacesController {
  constructor(private readonly pivoParkingSpacesService: PivoParkingSpacesService) {}

  @Post()
  @ApiBody({ type: PivoParkingSpaceDto })
  create(@Body() pivoParkingSpacesData: PivoParkingSpaceEntity) {
    return this.pivoParkingSpacesService.create(pivoParkingSpacesData);
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
  @ApiBody({ type: "exite_date" })
  update(@Param('id') id: string, @Body() pivoParkingSpacesData: PivoParkingSpaceEntity) {
    return this.pivoParkingSpacesService.update(+id, pivoParkingSpacesData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pivoParkingSpacesService.remove(+id);
  }
}
