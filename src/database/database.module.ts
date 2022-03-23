import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingEntity } from 'src/parkings/entities/parking.entity';
import { PivoParkingSpaceEntity } from 'src/pivo-parking-spaces/entities/pivo-parking-space.entity';
import { SpaceEntity } from 'src/spaces/entities/space.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'postgres',
        database: 'parkings',
        entities: [
          ParkingEntity,
          SpaceEntity,
          PivoParkingSpaceEntity
        ],
        synchronize: true
    }),
  ],
})
export class DatabaseModule {}