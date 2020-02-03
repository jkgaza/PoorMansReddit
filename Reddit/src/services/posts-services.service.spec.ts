import { TestBed } from '@angular/core/testing';

import { PostsServicesService } from './posts-services.service';

describe('PostsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsServicesService = TestBed.get(PostsServicesService);
    expect(service).toBeTruthy();
  });
});
