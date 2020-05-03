import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCComponent } from './contenido-c.component';

describe('ContenidoCComponent', () => {
  let component: ContenidoCComponent;
  let fixture: ComponentFixture<ContenidoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
