import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkWebComponent } from './link-web.component';

describe('LinkWebComponent', () => {
  let component: LinkWebComponent;
  let fixture: ComponentFixture<LinkWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
