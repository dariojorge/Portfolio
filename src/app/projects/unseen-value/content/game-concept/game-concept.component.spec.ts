import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameConceptComponent } from './game-concept.component';

describe('GameConceptComponent', () => {
  let component: GameConceptComponent;
  let fixture: ComponentFixture<GameConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameConceptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
