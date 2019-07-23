import { Estudiante } from './estudiante';
import { Asignatura } from './asignatura';

export class EstudianteAsignatura {
  Id: number;
  Estudiante: Estudiante;
  Asignatura: Asignatura;
  Nota: Array<number>;
  Porcentaje: Array<number>;
}
