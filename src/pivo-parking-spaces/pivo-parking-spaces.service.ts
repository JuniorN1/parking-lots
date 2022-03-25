import { Injectable } from '@nestjs/common';
import { PivoParkingSpaceDto } from './dto/pivo-parking-space.dto';
import { Repository } from 'typeorm';
import { PivoParkingSpaceEntity } from './entities/pivo-parking-space.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingsController } from '../parkings/parkings.controller';
@Injectable()
export class PivoParkingSpacesService {
  constructor(@InjectRepository(PivoParkingSpaceEntity) private pivoParkingSpaceRepository: Repository<PivoParkingSpaceEntity>) {

  }

  create(pivoParkingSpaceData: PivoParkingSpaceEntity) {
    this.pivoParkingSpaceRepository.create(pivoParkingSpaceData);
  }

  async findAll() : Promise<any>{
   return await this.pivoParkingSpaceRepository
  }
  
  async findOne(id): Promise<PivoParkingSpaceEntity> {
    return await this.pivoParkingSpaceRepository.findOne(id);
  }

  async update(id: number, pivoParkingSpaceData: PivoParkingSpaceEntity): Promise<PivoParkingSpaceEntity> {
    const {
      parking_id,
      space_id,
      exite_date,
    } = pivoParkingSpaceData;
    const pivoParkingSpace = await this.findOne(id);
    pivoParkingSpace.parking_id = parking_id;
    pivoParkingSpace.space_id = space_id;
    pivoParkingSpace.exite_date = exite_date;

    return this.pivoParkingSpaceRepository.save(pivoParkingSpace);
  }

  remove(id: number) {
    return this.pivoParkingSpaceRepository.delete(id);
  }

}
