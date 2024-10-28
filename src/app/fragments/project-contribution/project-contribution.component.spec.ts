import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContributionComponent } from './project-contribution.component';

describe('ProjectContributionComponent', () => {
  let component: ProjectContributionComponent;
  let fixture: ComponentFixture<ProjectContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectContributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
