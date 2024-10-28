import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMechanicsComponent } from './project-mechanics.component';

describe('ProjectMechanicsComponent', () => {
  let component: ProjectMechanicsComponent;
  let fixture: ComponentFixture<ProjectMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMechanicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
