package models

type AsignaturaNota struct {
	CodigoAsignatura *Asignatura `orm:"column(codigo_asignatura);rel(fk)"`
	IdNota           *Nota       `orm:"column(id_nota);rel(fk)"`
}
