package models

type EstudianteAsignatura struct {
	CodigoEstudiante *Estudiante `orm:"column(codigo_estudiante);rel(fk)"`
	CodigoAsignatura *Asignatura `orm:"column(codigo_asignatura);rel(fk)"`
}
