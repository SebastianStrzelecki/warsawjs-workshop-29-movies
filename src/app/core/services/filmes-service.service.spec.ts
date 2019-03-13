import { TestBed } from '@angular/core/testing';

import { FilmesServiceService } from './filmes-service.service';

describe('FilmesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmesServiceService = TestBed.get(FilmesServiceService);
    expect(service).toBeTruthy();
  });
});
