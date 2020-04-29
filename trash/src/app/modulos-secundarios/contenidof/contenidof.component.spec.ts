import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidofComponent } from './contenidof.component';

describe('ContenidofComponent', () => {
  let component: ContenidofComponent;
  let fixture: ComponentFixture<ContenidofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
