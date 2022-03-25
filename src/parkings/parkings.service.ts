import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParkingDto } from './dto/parking.dto';
import { ParkingEntity } from './entities/parking.entity';

@Injectable()
export class ParkingsService {
  constructor(@InjectRepository(ParkingEntity) private parkingRepository: Repository<ParkingEntity>) {

  }

  create(ParkingData: ParkingEntity) {
    return this.parkingRepository.save(ParkingData);
  }

  findAll() {
    return this.parkingRepository.find();
  }

  async findOne(id): Promise<ParkingEntity> {

    return await this.parkingRepository.findOne(id);
  }

  async update(id: number, parkingData: ParkingEntity): Promise<ParkingEntity> {
    const {
      parking_name,
      parking_lat,
      parking_long,
      parking_price_hour
    } = parkingData;
    const parking = await this.findOne(id);
    parking.parking_name = parking_name;
    parking.parking_lat = parking_lat;
    parking.parking_long = parking_long;
    parking.parking_price_hour = parking_price_hour;
    return this.parkingRepository.save(parking);

  }

  remove(id: number) {
    this.parkingRepository.delete(id);
  }
}

