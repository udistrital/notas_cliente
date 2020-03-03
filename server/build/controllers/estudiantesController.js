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
class EstudiantesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var estudiantes = new Array();
            const student = yield database_1.default.any('SELECT codigo from estudiante');
            for (let i in student) {
                const codEstudiante = student[i].codigo;
                const query = yield database_1.default.any('SELECT codigo, nombre, apellido, correo, contrasena from usuario WHERE codigo=$1', [codEstudiante]);
                const query2 = yield database_1.default.any('SELECT proyecto_curricular from estudiante WHERE codigo=$1', [codEstudiante]);
                let proyCurricular = Object.assign(query[0], query2[0]);
                estudiantes.push(proyCurricular);
            }
            res.json(estudiantes);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos_estudiante = new Array();
            const { id } = req.params;
            const proyecto_curricular = yield database_1.default.any('SELECT proyecto_curricular from estudiante WHERE codigo=$1', [id]);
            const estudiante = yield database_1.default.any('SELECT codigo, nombre, apellido from usuario WHERE codigo = $1', [id]);
            datos_estudiante.push(Object.assign(estudiante[0], proyecto_curricular[0]));
            res.json(datos_estudiante);
        });
    }
}
const estudiantesController = new EstudiantesController();
exports.default = estudiantesController;
