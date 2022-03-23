import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParkingDto } from './dto/parking.dto';
import { ParkingEntity } from './entities/parking.entity';

@Injectable()
export class ParkingsService {
  constructor(@InjectRepository(ParkingEntity) private parkingRepository: Repository<ParkingEntity>) {

  }

  create(ParkingData: ParkingDto) {
    return this.parkingRepository.save(ParkingData);
  }

  findAll() {
    return this.parkingRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} parking`;
  }

  update(id: number, updateParkingDto: ParkingDto) {
    return `This action updates a #${id} parking`;
  }

  remove(id: number) {
    return `This action removes a #${id} parking`;
  }
}

