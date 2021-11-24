import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncWithAliasComponent } from './async-with-alias.component';

describe('AsyncWithAliasComponent', () => {
  let component: AsyncWithAliasComponent;
  let fixture: ComponentFixture<AsyncWithAliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncWithAliasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncWithAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
