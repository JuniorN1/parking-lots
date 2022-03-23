import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingsModule } from './parkings/parkings.module';
import { SpacesModule } from './spaces/spaces.module';
import { PivoParkingSpacesModule } from './pivo-parking-spaces/pivo-parking-spaces.module';

@Module({
  imports: [
    ParkingsModule, 
    SpacesModule, 
    PivoParkingSpacesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
