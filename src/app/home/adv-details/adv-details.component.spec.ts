import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvDetailsComponent } from './adv-details.component';

describe('AdvDetailsComponent', () => {
  let component: AdvDetailsComponent;
  let fixture: ComponentFixture<AdvDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
