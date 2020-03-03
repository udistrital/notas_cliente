import { Router } from 'express';
import asignaturaController from '../controllers/asignaturaController';


class AsignaturaRoute{
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/:id',asignaturaController.getOne);
    }
}

const asignaturaRoute = new AsignaturaRoute();
export default asignaturaRoute.router;