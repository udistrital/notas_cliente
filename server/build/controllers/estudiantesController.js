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
            const { id } = req.params;
            const estudiante = yield database_1.default.any('SELECT codigo, nombre, apellido from usuario WHERE codigo = $1', [id]);
            res.json(estudiante);
        });
    }
}
const estudiantesController = new EstudiantesController();
exports.default = estudiantesController;
