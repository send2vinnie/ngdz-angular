import { TestBed, inject } from '@angular/core/testing';

import { AbpService } from './abp.service';

describe('AbpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbpService]
    });
  });

  it('should be created', inject([AbpService], (service: AbpService) => {
    expect(service).toBeTruthy();
  }));
});
