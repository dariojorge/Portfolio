import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTextComponent } from './column-text.component';

describe('ColumnTextComponent', () => {
  let component: ColumnTextComponent;
  let fixture: ComponentFixture<ColumnTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
