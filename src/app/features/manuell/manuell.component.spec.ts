import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuellComponent } from './manuell.component';

describe('ManuellComponent', () => {
  let component: ManuellComponent;
  let fixture: ComponentFixture<ManuellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
