"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignaturaController_1 = __importDefault(require("../controllers/asignaturaController"));
class AsignaturaRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', asignaturaController_1.default.getOne);
    }
}
const asignaturaRoute = new AsignaturaRoute();
exports.default = asignaturaRoute.router;
