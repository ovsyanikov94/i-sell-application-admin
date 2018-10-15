import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Delete.ModalComponent } from './delete.modal.component';

describe('Delete.ModalComponent', () => {
  let component: Delete.ModalComponent;
  let fixture: ComponentFixture<Delete.ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Delete.ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Delete.ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
