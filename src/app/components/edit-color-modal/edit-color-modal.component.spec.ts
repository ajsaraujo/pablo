import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditColorModalComponent } from './edit-color-modal.component';

describe('EditColorModalComponent', () => {
  let component: EditColorModalComponent;
  let fixture: ComponentFixture<EditColorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditColorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditColorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
