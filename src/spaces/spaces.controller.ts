import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpaceDto } from './dto/space.dto';
import { SpaceEntity } from './entities/space.entity';


@Controller('spaces')
export class SpacesController {
  constructor(private readonly spacesService: SpacesService) {}

  @Post()
  create(@Body() spaceData: SpaceEntity) {
    return this.spacesService.create(spaceData);
  }

  @Get()
  findAll() {
    return this.spacesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spacesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() spaceData: SpaceEntity) {
    return this.spacesService.update(+id, spaceData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spacesService.remove(+id);
  }
}
