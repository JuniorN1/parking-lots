import { Injectable } from '@nestjs/common';
import { PivoParkingSpaceDto } from './dto/pivo-parking-space.dto';
import { Repository } from 'typeorm';
import { PivoParkingSpaceEntity } from './entities/pivo-parking-space.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PivoParkingSpacesService {
  constructor(@InjectRepository(PivoParkingSpaceEntity) private contactRepository: Repository<PivoParkingSpaceEntity>) {

  }
  
  create(createPivoParkingSpaceDto: PivoParkingSpaceDto) {
    return 'This action adds a new pivoParkingSpace';
  }

  findAll() {
    return `This action returns all pivoParkingSpaces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pivoParkingSpace`;
  }

  update(id: number, updatePivoParkingSpaceDto: PivoParkingSpaceDto) {
    return `This action updates a #${id} pivoParkingSpace`;
  }

  remove(id: number) {
    return `This action removes a #${id} pivoParkingSpace`;
  }
}
