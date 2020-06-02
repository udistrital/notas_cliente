package models

type DocenteAsignatura struct {
	CodigoDocente    *Docente    `orm:"column(codigo_docente);rel(fk)"`
	CodigoAsignatura *Asignatura `orm:"column(codigo_asignatura);rel(fk)"`
}
