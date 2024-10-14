import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementpageComponent } from './achievementpage.component';

describe('AchievementpageComponent', () => {
  let component: AchievementpageComponent;
  let fixture: ComponentFixture<AchievementpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievementpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
