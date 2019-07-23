"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProfesorAsignaturaNotaController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var notas = new Array();
            const { id } = req.params;
            const nota = yield database_1.default.any('SELECT id_nota from asignatura_nota WHERE codigo_asignatura = $1', [id]);
            var materias = new Array();
            for (let i in nota) {
                const codigoNota = nota[i].id_nota;
                const query = yield database_1.default.any('SELECT codigo_estudiante from estudiante_nota WHERE id_nota= $1', [codigoNota]);
                const query2 = yield database_1.default.any('SELECT codigo, nombre, apellido from usuario WHERE codigo= $1', [query[0].codigo_estudiante]);
                const query3 = yield database_1.default.any('SELECT nota1, porcentaje1, nota2, porcentaje2, nota3, porcentaje3, nota4, porcentaje4, nota5, porcentaje5, nota6, porcentaje6, laboratorio, porcentaje_lab, examen_final, porcentaje_ex, habilitacion, porcentaje_hab, definitiva from nota WHERE id_nota= $1', [codigoNota]);
                let tablaNotas = Object.assign(query2[0], query3[0]);
                notas.push(tablaNotas);
            }
            res.json(notas);
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nota1, porcentaje1, nota2, porcentaje2, nota3, porcentaje3, nota4, porcentaje4, nota5, porcentaje5, nota6, porcentaje6, laboratorio, porcentaje_lab, examen_final, porcentaje_ex, habilitacion, porcentaje_hab, definitiva } = req.body;
            const id_nota = yield database_1.default.any('SELECT id_nota from estudiante_nota WHERE codigo_estudiante = $1', [id]);
            yield database_1.default.none('UPDATE nota set nota1=$1, porcentaje1=$2, nota2=$3, porcentaje2=$4, nota3=$5, porcentaje3=$6, nota4=$7, porcentaje4=$8, nota5=$9, porcentaje5=$10, nota6=$11, porcentaje6=$12, laboratorio=$13, porcentaje_lab=$14, examen_final=$15, porcentaje_ex=$16, habilitacion=$17, porcentaje_hab=$18, definitiva=$19 WHERE id_nota=$20', [parseInt(nota1), parseInt(porcentaje1), parseInt(nota2), parseInt(porcentaje2),
                parseInt(nota3), parseInt(porcentaje3), parseInt(nota4), parseInt(porcentaje4), parseInt(nota5),
                parseInt(porcentaje5), parseInt(nota6), parseInt(porcentaje6), parseInt(laboratorio), parseInt(porcentaje_lab),
                parseInt(examen_final), parseInt(porcentaje_ex), parseInt(habilitacion), parseInt(porcentaje_hab), parseInt(definitiva), id_nota[0].id_nota])
                .then(() => {
                res.status(200)
                    .json({
                    status: 'sucess',
                    message: 'Nota actualizada correctamente'
                });
            })
                .catch((err) => console.log(err));
        });
    }
}
const profesorAsignaturaNotaController = new ProfesorAsignaturaNotaController();
exports.default = profesorAsignaturaNotaController;
