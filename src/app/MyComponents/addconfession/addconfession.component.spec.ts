import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconfessionComponent } from './addconfession.component';

describe('AddconfessionComponent', () => {
  let component: AddconfessionComponent;
  let fixture: ComponentFixture<AddconfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddconfessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddconfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
