"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MateriasestudianteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const materias = yield database_1.default.any('SELECT * from asignatura_nota');
            res.json(materias);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var notas = new Array();
            var notas_por_semestre = new Array();
            var numero_semestres = new Array();
            const { id } = req.params;
            const id_nota = yield database_1.default.any('SELECT id_nota from estudiante_nota WHERE codigo_estudiante = $1', [id]);
            const n_asignaturas = yield database_1.default.any('SELECT codigo_asignatura from estudiante_asignatura WHERE codigo_estudiante =$1 ', [id]);
            for (let i in n_asignaturas) {
                const n_semestres = yield database_1.default.any('SELECT semestre from asignatura WHERE codigo=$1', [n_asignaturas[i].codigo_asignatura]);
                numero_semestres.push(n_semestres[0].semestre);
            }
            const semestre_cursado = Math.max.apply(null, numero_semestres);
            console.log(semestre_cursado);
            for (var j = 1; j <= semestre_cursado; j++) {
                for (let i in id_nota) {
                    const idNota = id_nota[i].id_nota;
                    const query = yield database_1.default.any('SELECT codigo_asignatura from asignatura_nota WHERE id_nota = $1', [idNota]);
                    const querySemestre = yield database_1.default.any('SELECT semestre from asignatura WHERE codigo =$1', [query[0].codigo_asignatura]);
                    if (j === querySemestre[0].semestre) {
                        const query2 = yield database_1.default.any('SELECT codigo, nombre, numero_creditos, grupo from asignatura WHERE codigo = $1', [query[0].codigo_asignatura]);
                        const query3 = yield database_1.default.any('SELECT nota1, porcentaje1, nota2, porcentaje2, nota3, porcentaje3, nota4, porcentaje4, nota5, porcentaje5, nota6, porcentaje6, laboratorio, porcentaje_lab, examen_final, porcentaje_ex, habilitacion, porcentaje_hab, definitiva from nota WHERE id_nota= $1', [idNota]);
                        let tablaNotas = Object.assign(query2[0], query3[0]);
                        notas.push(tablaNotas);
                    }
                }
                notas_por_semestre.push(notas);
                notas = [];
            }
            console.log(notas_por_semestre);
            res.json(notas_por_semestre);
        });
    }
}
const materiasestudianteController = new MateriasestudianteController();
exports.default = materiasestudianteController;
