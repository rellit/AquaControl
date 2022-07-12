import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayDefComponent } from './relay-def.component';

describe('RelayDefComponent', () => {
  let component: RelayDefComponent;
  let fixture: ComponentFixture<RelayDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayDefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelayDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
