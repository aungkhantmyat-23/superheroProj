import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidekickListPageComponent } from './sidekick-list-page.component';

describe('SidekickListPageComponent', () => {
  let component: SidekickListPageComponent;
  let fixture: ComponentFixture<SidekickListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidekickListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidekickListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
