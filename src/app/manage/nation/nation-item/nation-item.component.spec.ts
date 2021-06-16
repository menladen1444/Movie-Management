import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationItemComponent } from './nation-item.component';

describe('NationItemComponent', () => {
  let component: NationItemComponent;
  let fixture: ComponentFixture<NationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
