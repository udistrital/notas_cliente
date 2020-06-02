package models

type EstudianteNota struct {
	CodigoEstudiante *Estudiante `orm:"column(codigo_estudiante);rel(fk)"`
	IdNota           *Nota       `orm:"column(id_nota);rel(fk)"`
}
