import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesController } from './spaces.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpaceEntity } from './entities/space.entity';

@Module({
  imports:[    
    DatabaseModule, 
    TypeOrmModule.forFeature([SpaceEntity])
  ],
  controllers: [SpacesController],
  providers: [SpacesService]
})
export class SpacesModule {}
