import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconfessionformComponent } from './addconfessionform.component';

describe('AddconfessionformComponent', () => {
  let component: AddconfessionformComponent;
  let fixture: ComponentFixture<AddconfessionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddconfessionformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddconfessionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
