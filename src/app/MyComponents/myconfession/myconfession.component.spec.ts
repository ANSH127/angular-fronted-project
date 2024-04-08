import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyconfessionComponent } from './myconfession.component';

describe('MyconfessionComponent', () => {
  let component: MyconfessionComponent;
  let fixture: ComponentFixture<MyconfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyconfessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyconfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
