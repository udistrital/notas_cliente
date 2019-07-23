import { Router } from 'express';
import materiasestudianteController from '../controllers/materiasestudianteController';


class MateriasestudianteRoute{
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', materiasestudianteController.list);
        this.router.get('/:id',materiasestudianteController.getOne);
    }
}

const materiasestudianteRoute = new MateriasestudianteRoute();
export default materiasestudianteRoute.router;