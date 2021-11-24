import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutAsyncComponent } from './without-async.component';

describe('WithoutAsyncComponent', () => {
  let component: WithoutAsyncComponent;
  let fixture: ComponentFixture<WithoutAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
