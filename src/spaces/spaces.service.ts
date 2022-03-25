import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpaceEntity } from './entities/space.entity';

@Injectable()
export class SpacesService {
  constructor(@InjectRepository(SpaceEntity) private spaceRepository: Repository<SpaceEntity>) {

  }

  create(SpaceData: SpaceEntity) {
    return  this.spaceRepository.create(SpaceData);
  }

  findAll() {
    return this.spaceRepository.find();
  }

  async findOne(id) : Promise<SpaceEntity> {
    return await  this.spaceRepository.findOne(id);
  }

  async update(id: number, SpaceData: SpaceEntity) : Promise<SpaceEntity>{
    const {
      space_name
    } = SpaceData;
    const space = await this.findOne(id);
    space.space_name = space_name;
    return this.spaceRepository.save(space);
  }

  remove(id: number) {
    return this.spaceRepository.delete(id);
  }
}
