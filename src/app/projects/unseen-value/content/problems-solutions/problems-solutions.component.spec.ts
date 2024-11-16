import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsSolutionsComponent } from './problems-solutions.component';

describe('ProblemsSolutionsComponent', () => {
  let component: ProblemsSolutionsComponent;
  let fixture: ComponentFixture<ProblemsSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemsSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemsSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
