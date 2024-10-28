import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnseenValueComponent } from './unseen-value.component';

describe('UnseenValueComponent', () => {
  let component: UnseenValueComponent;
  let fixture: ComponentFixture<UnseenValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnseenValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnseenValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
