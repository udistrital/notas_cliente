// @APIVersion 1.0.0
// @Title beego Test API
// @Description beego has a very cool tools to autogenerate documents for your API
// @Contact astaxie@gmail.com
// @TermsOfServiceUrl http://beego.me/
// @License Apache 2.0
// @LicenseUrl http://www.apache.org/licenses/LICENSE-2.0.html
package routers

import (
	"Go/controllers"

	"github.com/astaxie/beego"
)

func init() {
	ns := beego.NewNamespace("/v1",

		beego.NSNamespace("/usuario",
			beego.NSInclude(
				&controllers.UsuarioController{},
			),
		),

		beego.NSNamespace("/docente",
			beego.NSInclude(
				&controllers.DocenteController{},
			),
		),

		beego.NSNamespace("/estudiante",
			beego.NSInclude(
				&controllers.EstudianteController{},
			),
		),

		beego.NSNamespace("/nota",
			beego.NSInclude(
				&controllers.NotaController{},
			),
		),

		beego.NSNamespace("/asignatura",
			beego.NSInclude(
				&controllers.AsignaturaController{},
			),
		),
	)
	beego.AddNamespace(ns)
}
