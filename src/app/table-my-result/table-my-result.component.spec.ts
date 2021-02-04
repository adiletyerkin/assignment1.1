import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMyResultComponent } from './table-my-result.component';

describe('TableMyResultComponent', () => {
  let component: TableMyResultComponent;
  let fixture: ComponentFixture<TableMyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMyResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
