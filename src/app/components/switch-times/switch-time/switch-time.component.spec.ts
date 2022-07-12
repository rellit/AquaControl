import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTimeComponent } from './switch-time.component';

describe('SwitchTimeComponent', () => {
  let component: SwitchTimeComponent;
  let fixture: ComponentFixture<SwitchTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
