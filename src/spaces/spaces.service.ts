import { Injectable } from '@nestjs/common';
import { SpaceDto } from './dto/space.dto';

@Injectable()
export class SpacesService {
  create(SpaceDto: SpaceDto) {
    return 'This action adds a new space';
  }

  findAll() {
    return `This action returns all spaces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} space`;
  }

  update(id: number, updateSpaceDto: SpaceDto) {
    return `This action updates a #${id} space`;
  }

  remove(id: number) {
    return `This action removes a #${id} space`;
  }
}
