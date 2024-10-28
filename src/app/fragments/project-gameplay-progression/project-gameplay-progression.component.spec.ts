import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGameplayProgressionComponent } from './project-gameplay-progression.component';

describe('ProjectGameplayProgressionComponent', () => {
  let component: ProjectGameplayProgressionComponent;
  let fixture: ComponentFixture<ProjectGameplayProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGameplayProgressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectGameplayProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
