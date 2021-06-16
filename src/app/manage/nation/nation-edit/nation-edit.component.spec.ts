import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationEditComponent } from './nation-edit.component';

describe('NationEditComponent', () => {
  let component: NationEditComponent;
  let fixture: ComponentFixture<NationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
