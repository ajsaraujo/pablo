import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColorModalComponent } from './new-color-modal.component';

describe('NewColorModalComponent', () => {
  let component: NewColorModalComponent;
  let fixture: ComponentFixture<NewColorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewColorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
