import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoaderUi } from './ngx-loader-ui';

describe('NgxLoaderUi', () => {
  let component: NgxLoaderUi;
  let fixture: ComponentFixture<NgxLoaderUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxLoaderUi],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxLoaderUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
