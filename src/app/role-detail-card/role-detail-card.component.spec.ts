import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDetailCardComponent } from './role-detail-card.component';

describe('RoleDetailCardComponent', () => {
  let component: RoleDetailCardComponent;
  let fixture: ComponentFixture<RoleDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleDetailCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
