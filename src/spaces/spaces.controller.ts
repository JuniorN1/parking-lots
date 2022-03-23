import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpaceDto } from './dto/space.dto';


@Controller('spaces')
export class SpacesController {
  constructor(private readonly spacesService: SpacesService) {}

  @Post()
  create(@Body() createSpaceDto: SpaceDto) {
    return this.spacesService.create(createSpaceDto);
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
  update(@Param('id') id: string, @Body() updateSpaceDto: SpaceDto) {
    return this.spacesService.update(+id, updateSpaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spacesService.remove(+id);
  }
}
