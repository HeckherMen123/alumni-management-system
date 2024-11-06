import { TestBed } from '@angular/core/testing';

import { AchievementsService } from './achievement.service';

describe('AchievementService', () => {
  let service: AchievementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchievementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
