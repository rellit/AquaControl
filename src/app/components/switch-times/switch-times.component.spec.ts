import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTimesComponent } from './switch-times.component';

describe('SwitchTimesComponent', () => {
  let component: SwitchTimesComponent;
  let fixture: ComponentFixture<SwitchTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchTimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
