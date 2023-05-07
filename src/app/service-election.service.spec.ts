import { TestBed } from '@angular/core/testing';

import { ServiceElectionService } from './service-election.service';

describe('ServiceElectionService', () => {
  let service: ServiceElectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceElectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
