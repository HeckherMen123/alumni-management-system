import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewadmineventComponent } from './newadminevent.component';

describe('NewadmineventComponent', () => {
  let component: NewadmineventComponent;
  let fixture: ComponentFixture<NewadmineventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewadmineventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewadmineventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
