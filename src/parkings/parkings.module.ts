import { Module } from '@nestjs/common';
import { ParkingsService } from './parkings.service';
import { ParkingsController } from './parkings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingEntity } from './entities/parking.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[    
    DatabaseModule, 
    TypeOrmModule.forFeature([ParkingEntity])
  ],
  controllers: [
    ParkingsController
  ],
  providers: [
    ParkingsService
  ]
})
export class ParkingsModule {}
