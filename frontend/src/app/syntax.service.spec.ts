import { TestBed } from '@angular/core/testing';

import { SyntaxService } from './syntax.service';

describe('SyntaxService', () => {
  let service: SyntaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyntaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
