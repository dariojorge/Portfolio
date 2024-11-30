import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCase02Component } from './show-case-02.component';

describe('ShowCase02Component', () => {
  let component: ShowCase02Component;
  let fixture: ComponentFixture<ShowCase02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCase02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCase02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
