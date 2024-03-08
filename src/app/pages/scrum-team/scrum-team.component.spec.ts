import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumTeamComponent } from './scrum-team.component';

describe('ScrumTeamComponent', () => {
  let component: ScrumTeamComponent;
  let fixture: ComponentFixture<ScrumTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrumTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrumTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
