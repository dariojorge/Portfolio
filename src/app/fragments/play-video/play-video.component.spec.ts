import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayVideoComponent } from './play-video.component';

describe('ProjectTrailerComponent', () => {
  let component: PlayVideoComponent;
  let fixture: ComponentFixture<PlayVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
