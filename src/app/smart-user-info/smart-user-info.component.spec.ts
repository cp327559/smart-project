import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartUserInfoComponent } from './smart-user-info.component';

describe('SmartUserInfoComponent', () => {
  let component: SmartUserInfoComponent;
  let fixture: ComponentFixture<SmartUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
