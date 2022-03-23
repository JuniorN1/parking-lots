import { Module } from '@nestjs/common';
import { PivoParkingSpacesService } from './pivo-parking-spaces.service';
import { PivoParkingSpacesController } from './pivo-parking-spaces.controller';
import { PivoParkingSpaceEntity } from './entities/pivo-parking-space.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[    
    DatabaseModule, 
    TypeOrmModule.forFeature([PivoParkingSpaceEntity])
  ],
  controllers: [PivoParkingSpacesController],
  providers: [PivoParkingSpacesService]
})
export class PivoParkingSpacesModule {}
