import { Router } from 'express';
import estudianteController from '../controllers/estudiantesController';


class EstudianteRoute{
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', estudianteController.list);
        this.router.get('/:id',estudianteController.getOne);
    }
}

const estudianteRoute = new EstudianteRoute();
export default estudianteRoute.router;