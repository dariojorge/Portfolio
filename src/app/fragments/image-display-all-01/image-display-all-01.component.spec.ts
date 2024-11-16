import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDisplayAll01Component } from './image-display-all-01.component';

describe('ImageDisplayAll01Component', () => {
  let component: ImageDisplayAll01Component;
  let fixture: ComponentFixture<ImageDisplayAll01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageDisplayAll01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDisplayAll01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
