import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfessioncardComponent } from './confessioncard.component';

describe('ConfessioncardComponent', () => {
  let component: ConfessioncardComponent;
  let fixture: ComponentFixture<ConfessioncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfessioncardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfessioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
