import { Router } from 'express';
import profesorController from '../controllers/profesoresController';


class ProfesoresRoute{
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', profesorController.list);
        this.router.get('/:id', profesorController.getOne);
    }
}
const profesorRoute = new ProfesoresRoute();
export default profesorRoute.router;