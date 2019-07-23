import { Router } from 'express';
import profesorAsignaturaNotaController from '../controllers/profesorAsignaturaNotaController';


class ProfesorAsignaturaNotaRoute{
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/:id',profesorAsignaturaNotaController.getOne);
        this.router.put('/:id',profesorAsignaturaNotaController.put);
    }
}

const profesorAsignaturaNotaRoute = new ProfesorAsignaturaNotaRoute();
export default profesorAsignaturaNotaRoute.router;