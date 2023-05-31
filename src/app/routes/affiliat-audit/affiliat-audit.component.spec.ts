import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatAuditComponent } from './affiliat-audit.component';

describe('AffiliatAuditComponent', () => {
  let component: AffiliatAuditComponent;
  let fixture: ComponentFixture<AffiliatAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatAuditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliatAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
