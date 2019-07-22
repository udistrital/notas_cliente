import {Request, Response} from 'express';
import db from '../database';
class ProfesoresController {

    public async list(req : Request, res : Response): Promise<void>{
       var profesores= new Array();
       const teacher = await db.any('SELECT codigo from docente');
       for ( let i in teacher){
           const codProfesor = teacher[i].codigo;
           const query = await db.any('SELECT codigo, nombre, apellido, correo, contrasena from usuario WHERE codigo=$1',[codProfesor]);
           profesores.push(query[0]);
       }
       res.json(profesores);
    }
    public async getOne(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        const profesor = await db.any('SELECT codigo, nombre, apellido from usuario WHERE codigo = $1', [id]);
        res.json(profesor);
    }
}
const profesoresController= new ProfesoresController();
export default profesoresController;