import express, { Application} from 'express';
import indexRoute from './routes/indexRoute';
import materiasRoute from './routes/materiasRoute';
import morgan from 'morgan';
import cors from 'cors';
import materiasestudianteRoute from './routes/materiasestudianteRoute';
import estudianteRoute from './routes/estudiantesRoute';
import profesorRoute from './routes/profesoresRoute';
import profesorAsignaturaNotaRoute from './routes/profesorAsignaturaNotaRoute';
class Server {
    public app: Application;

    constructor(){
        this.app = express();
        this.config()
        this.routes()
    }

    config(): void{
        this.app.set('port', process.env.port || 3000)
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/', indexRoute);
        this.app.use('/profesor/materias', materiasRoute);
        this.app.use('/profesor/', profesorRoute);
        this.app.use('/estudiante/materias',materiasestudianteRoute);
        this.app.use('/estudiante', estudianteRoute);
        this.app.use('/profesor/materias/nota', profesorAsignaturaNotaRoute);
    }

    start(): void{
        this.app.listen(3000, () => {
            console.log('server on port ', this.app.get('port'))
        });
    }
    //close(): void {
    //    this.app.listen(this.app.get('port')).close(() => {
    //        console.log('Http server closed.');
    //        console.log('Http server closed.');
    ///      });
    //}
}
const server = new Server();
  server.start();



