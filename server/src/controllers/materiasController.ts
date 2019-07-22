import {Request, Response} from 'express';
import db from '../database';
class MateriasController {

    public async list(req : Request, res : Response): Promise<void>{
       const materias = await db.any('SELECT * from asignatura');
       res.json(materias);
    }
    public async getOne(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        const materia = await db.any('SELECT * from asignatura WHERE codigo_docente = $1', [id]);
        res.json(materia);
    }
    public create (req: Request, res: Response){
        res.json({text:'creando materia'});
    }
    public delete (req: Request, res: Response){
        res.json({text:'eliminando una materia '+ req.params.id});
    }
    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        const actualizarMateria= await db.any('UPDATE asignatura set $1 WHERE id = $2',[req.body, id]);
        res.status(200).json('Cambio realizado satisfactoriamente');
    }
}
const materiasController= new MateriasController();
export default materiasController;