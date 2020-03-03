import {Request, Response} from 'express';
import db from '../database';
class AsignaturaController {

    
    public async getOne(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        const materia = await db.any('SELECT codigo, nombre from asignatura WHERE codigo = $1', [id]);
        res.json(materia);
    }
}
const asignaturaController= new AsignaturaController();
export default asignaturaController;