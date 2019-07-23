import {Request, Response} from 'express';
import db from '../database';
class EstudiantesController {

    public async list(req : Request, res : Response): Promise<void>{
       var estudiantes= new Array();
       const student = await db.any('SELECT codigo from estudiante');
       for ( let i in student){
           const codEstudiante = student[i].codigo;
           const query = await db.any('SELECT codigo, nombre, apellido, correo, contrasena from usuario WHERE codigo=$1',[codEstudiante]);
           const query2 = await db.any('SELECT proyecto_curricular from estudiante WHERE codigo=$1',[codEstudiante]);
           let proyCurricular= Object.assign(query[0],query2[0]);
           estudiantes.push(proyCurricular);
       }
       res.json(estudiantes);
    }
    public async getOne(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        const estudiante = await db.any('SELECT codigo, nombre, apellido from usuario WHERE codigo = $1', [id]);
        res.json(estudiante);
    }
}
const estudiantesController= new EstudiantesController();
export default estudiantesController;