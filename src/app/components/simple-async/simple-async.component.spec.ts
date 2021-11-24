import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAsyncComponent } from './simple-async.component';

describe('SimpleAsyncComponent', () => {
  let component: SimpleAsyncComponent;
  let fixture: ComponentFixture<SimpleAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
