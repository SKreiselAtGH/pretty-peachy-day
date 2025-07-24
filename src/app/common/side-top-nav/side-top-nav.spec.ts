import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTopNav } from './side-top-nav';

describe('SideTopNav', () => {
  let component: SideTopNav;
  let fixture: ComponentFixture<SideTopNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideTopNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideTopNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
