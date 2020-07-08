import { Test } from '@nestjs/testing';
import { AuthServerService } from './auth-server.service';

describe('AuthFeatureAuthServerService', () => {
  let service: AuthServerService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthServerService],
    }).compile();

    service = module.get(AuthServerService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
