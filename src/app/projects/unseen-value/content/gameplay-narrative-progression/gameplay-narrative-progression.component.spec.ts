import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplayNarrativeProgressionComponent } from './gameplay-narrative-progression.component';

describe('GameplayNarrativeProgressionComponent', () => {
  let component: GameplayNarrativeProgressionComponent;
  let fixture: ComponentFixture<GameplayNarrativeProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameplayNarrativeProgressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameplayNarrativeProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
