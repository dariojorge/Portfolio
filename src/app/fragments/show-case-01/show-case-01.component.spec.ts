import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCase01Component } from './show-case-01.component';

describe('ShowCase01Component', () => {
  let component: ShowCase01Component;
  let fixture: ComponentFixture<ShowCase01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCase01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCase01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
