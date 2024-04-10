import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcardComponent } from './searchcard.component';

describe('SearchcardComponent', () => {
  let component: SearchcardComponent;
  let fixture: ComponentFixture<SearchcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
