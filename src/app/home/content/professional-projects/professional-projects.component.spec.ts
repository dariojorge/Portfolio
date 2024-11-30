import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalProjectsComponent } from './professional-projects.component';

describe('ProfissionalProjectsComponent', () => {
  let component: ProfissionalProjectsComponent;
  let fixture: ComponentFixture<ProfissionalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfissionalProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfissionalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
