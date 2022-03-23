import { Test, TestingModule } from '@nestjs/testing';
import { PivoParkingSpacesService } from './pivo-parking-spaces.service';

describe('PivoParkingSpacesService', () => {
  let service: PivoParkingSpacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PivoParkingSpacesService],
    }).compile();

    service = module.get<PivoParkingSpacesService>(PivoParkingSpacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
