import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaNotaComponent } from './asignatura-nota.component';

describe('AsignaturaNotaComponent', () => {
    let component: AsignaturaNotaComponent;
    let fixture: ComponentFixture<AsignaturaNotaComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ AsignaturaNotaComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AsignaturaNotaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });