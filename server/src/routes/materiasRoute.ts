import { Router } from 'express';
import materiasController from '../controllers/materiasController';


class MateriasRoute{
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', materiasController.list);
        this.router.get('/:id',materiasController.getOne);
        this.router.post('/',materiasController.create);
        this.router.delete('/:id',materiasController.delete);
        this.router.put('/:id', materiasController.update);
    }
}

const materiasRoute = new MateriasRoute();
export default materiasRoute.router;