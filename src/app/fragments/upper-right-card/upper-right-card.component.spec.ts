import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperRightCardComponent } from './upper-right-card.component';

describe('UpperRightCardComponent', () => {
  let component: UpperRightCardComponent;
  let fixture: ComponentFixture<UpperRightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperRightCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperRightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
