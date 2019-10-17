import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyRightsComponent } from './copy-rights.component';

describe('CopyRightsComponent', () => {
  let component: CopyRightsComponent;
  let fixture: ComponentFixture<CopyRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
