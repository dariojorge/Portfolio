import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerLeftCardComponent } from './lower-left-card.component';

describe('LowerLeftCardComponent', () => {
  let component: LowerLeftCardComponent;
  let fixture: ComponentFixture<LowerLeftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerLeftCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerLeftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
