"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoute_1 = __importDefault(require("./routes/indexRoute"));
const materiasRoute_1 = __importDefault(require("./routes/materiasRoute"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const materiasestudianteRoute_1 = __importDefault(require("./routes/materiasestudianteRoute"));
const estudiantesRoute_1 = __importDefault(require("./routes/estudiantesRoute"));
const profesoresRoute_1 = __importDefault(require("./routes/profesoresRoute"));
const profesorAsignaturaNotaRoute_1 = __importDefault(require("./routes/profesorAsignaturaNotaRoute"));
const asignaturaRoute_1 = __importDefault(require("./routes/asignaturaRoute"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoute_1.default);
        this.app.use('/asignatura', asignaturaRoute_1.default);
        this.app.use('/profesor/materias', materiasRoute_1.default);
        this.app.use('/profesor/', profesoresRoute_1.default);
        this.app.use('/estudiante/materias', materiasestudianteRoute_1.default);
        this.app.use('/estudiante', estudiantesRoute_1.default);
        this.app.use('/profesor/materias/nota', profesorAsignaturaNotaRoute_1.default);
    }
    start() {
        this.app.listen(3000, () => {
            console.log('server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
