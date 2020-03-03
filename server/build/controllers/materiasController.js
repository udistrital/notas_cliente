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
class MateriasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const materias = yield database_1.default.any('SELECT * from asignatura');
            res.json(materias);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const materia = yield database_1.default.any('SELECT * from asignatura WHERE codigo_docente = $1', [id]);
            res.json(materia);
        });
    }
    create(req, res) {
        res.json({ text: 'creando materia' });
    }
    delete(req, res) {
        res.json({ text: 'eliminando una materia ' + req.params.id });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const actualizarMateria = yield database_1.default.any('UPDATE asignatura set $1 WHERE id = $2', [req.body, id]);
            res.status(200).json('Cambio realizado satisfactoriamente');
        });
    }
}
const materiasController = new MateriasController();
exports.default = materiasController;
