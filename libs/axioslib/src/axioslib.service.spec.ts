import { Test, TestingModule } from '@nestjs/testing';
import { AxioslibService } from './axioslib.service';

describe('AxioslibService', () => {
  let service: AxioslibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AxioslibService],
    }).compile();

    service = module.get<AxioslibService>(AxioslibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
