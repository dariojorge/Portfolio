import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextListElementComponent } from './text-list-element.component';

describe('TextListElementComponent', () => {
  let component: TextListElementComponent;
  let fixture: ComponentFixture<TextListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
