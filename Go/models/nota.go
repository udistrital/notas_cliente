package models

import (
	"errors"
	"fmt"
	"reflect"
	"strings"

	"github.com/astaxie/beego/orm"
)

type Nota struct {
	Nota1         int `orm:"column(nota1);null"`
	Porcentaje1   int `orm:"column(porcentaje1);null"`
	Id            int `orm:"column(id_nota);pk"`
	Nota2         int `orm:"column(nota2);null"`
	Porcentaje2   int `orm:"column(porcentaje2);null"`
	Nota3         int `orm:"column(nota3);null"`
	Porcentaje3   int `orm:"column(porcentaje3);null"`
	Nota4         int `orm:"column(nota4);null"`
	Porcentaje4   int `orm:"column(porcentaje4);null"`
	Nota5         int `orm:"column(nota5);null"`
	Porcentaje5   int `orm:"column(porcentaje5);null"`
	Nota6         int `orm:"column(nota6);null"`
	Porcentaje6   int `orm:"column(porcentaje6);null"`
	Laboratorio   int `orm:"column(laboratorio);null"`
	PorcentajeLab int `orm:"column(porcentaje_lab);null"`
	ExamenFinal   int `orm:"column(examen_final);null"`
	PorcentajeEx  int `orm:"column(porcentaje_ex);null"`
	Habilitacion  int `orm:"column(habilitacion);null"`
	PorcentajeHab int `orm:"column(porcentaje_hab);null"`
	Definitiva    int `orm:"column(definitiva);null"`
}

func (t *Nota) TableName() string {
	return "nota"
}

func init() {
	orm.RegisterModel(new(Nota))
}

// AddNota insert a new Nota into database and returns
// last inserted Id on success.
func AddNota(m *Nota) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(m)
	return
}

// GetNotaById retrieves Nota by Id. Returns error if
// Id doesn't exist
func GetNotaById(id int) (v *Nota, err error) {
	o := orm.NewOrm()
	v = &Nota{Id: id}
	if err = o.Read(v); err == nil {
		return v, nil
	}
	return nil, err
}

// GetAllNota retrieves all Nota matches certain condition. Returns empty list if
// no records exist
func GetAllNota(query map[string]string, fields []string, sortby []string, order []string,
	offset int64, limit int64) (ml []interface{}, err error) {
	o := orm.NewOrm()
	qs := o.QueryTable(new(Nota))
	// query k=v
	for k, v := range query {
		// rewrite dot-notation to Object__Attribute
		k = strings.Replace(k, ".", "__", -1)
		if strings.Contains(k, "isnull") {
			qs = qs.Filter(k, (v == "true" || v == "1"))
		} else {
			qs = qs.Filter(k, v)
		}
	}
	// order by:
	var sortFields []string
	if len(sortby) != 0 {
		if len(sortby) == len(order) {
			// 1) for each sort field, there is an associated order
			for i, v := range sortby {
				orderby := ""
				if order[i] == "desc" {
					orderby = "-" + v
				} else if order[i] == "asc" {
					orderby = v
				} else {
					return nil, errors.New("Error: Invalid order. Must be either [asc|desc]")
				}
				sortFields = append(sortFields, orderby)
			}
			qs = qs.OrderBy(sortFields...)
		} else if len(sortby) != len(order) && len(order) == 1 {
			// 2) there is exactly one order, all the sorted fields will be sorted by this order
			for _, v := range sortby {
				orderby := ""
				if order[0] == "desc" {
					orderby = "-" + v
				} else if order[0] == "asc" {
					orderby = v
				} else {
					return nil, errors.New("Error: Invalid order. Must be either [asc|desc]")
				}
				sortFields = append(sortFields, orderby)
			}
		} else if len(sortby) != len(order) && len(order) != 1 {
			return nil, errors.New("Error: 'sortby', 'order' sizes mismatch or 'order' size is not 1")
		}
	} else {
		if len(order) != 0 {
			return nil, errors.New("Error: unused 'order' fields")
		}
	}

	var l []Nota
	qs = qs.OrderBy(sortFields...)
	if _, err = qs.Limit(limit, offset).All(&l, fields...); err == nil {
		if len(fields) == 0 {
			for _, v := range l {
				ml = append(ml, v)
			}
		} else {
			// trim unused fields
			for _, v := range l {
				m := make(map[string]interface{})
				val := reflect.ValueOf(v)
				for _, fname := range fields {
					m[fname] = val.FieldByName(fname).Interface()
				}
				ml = append(ml, m)
			}
		}
		return ml, nil
	}
	return nil, err
}

// UpdateNota updates Nota by Id and returns error if
// the record to be updated doesn't exist
func UpdateNotaById(m *Nota) (err error) {
	o := orm.NewOrm()
	v := Nota{Id: m.Id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Update(m); err == nil {
			fmt.Println("Number of records updated in database:", num)
		}
	}
	return
}

// DeleteNota deletes Nota by Id and returns error if
// the record to be deleted doesn't exist
func DeleteNota(id int) (err error) {
	o := orm.NewOrm()
	v := Nota{Id: id}
	// ascertain id exists in the database
	if err = o.Read(&v); err == nil {
		var num int64
		if num, err = o.Delete(&Nota{Id: id}); err == nil {
			fmt.Println("Number of records deleted in database:", num)
		}
	}
	return
}
