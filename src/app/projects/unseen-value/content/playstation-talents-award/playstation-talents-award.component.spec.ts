import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystationTalentsAwardComponent } from './playstation-talents-award.component';

describe('PlaystationTalentsAwardComponent', () => {
  let component: PlaystationTalentsAwardComponent;
  let fixture: ComponentFixture<PlaystationTalentsAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaystationTalentsAwardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaystationTalentsAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
