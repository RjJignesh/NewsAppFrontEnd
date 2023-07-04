import { TestBed } from '@angular/core/testing';

import { NewsCommonService } from './news.common.service';

describe('NewsCommonService', () => {
  let service: NewsCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
