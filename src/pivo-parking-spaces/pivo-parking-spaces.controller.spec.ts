import { Test, TestingModule } from '@nestjs/testing';
import { PivoParkingSpacesController } from './pivo-parking-spaces.controller';
import { PivoParkingSpacesService } from './pivo-parking-spaces.service';

describe('PivoParkingSpacesController', () => {
  let controller: PivoParkingSpacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PivoParkingSpacesController],
      providers: [PivoParkingSpacesService],
    }).compile();

    controller = module.get<PivoParkingSpacesController>(PivoParkingSpacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
