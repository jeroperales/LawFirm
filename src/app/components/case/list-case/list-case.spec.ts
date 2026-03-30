import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCase } from './list-case';

describe('ListCase', () => {
  let component: ListCase;
  let fixture: ComponentFixture<ListCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
