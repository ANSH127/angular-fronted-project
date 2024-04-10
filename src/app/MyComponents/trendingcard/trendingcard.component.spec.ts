import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingcardComponent } from './trendingcard.component';

describe('TrendingcardComponent', () => {
  let component: TrendingcardComponent;
  let fixture: ComponentFixture<TrendingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
