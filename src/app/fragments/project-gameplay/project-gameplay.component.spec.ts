import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGameplayComponent } from './project-gameplay.component';

describe('ProjectGameplayComponent', () => {
  let component: ProjectGameplayComponent;
  let fixture: ComponentFixture<ProjectGameplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGameplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectGameplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
