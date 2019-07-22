import {Request, Response} from 'express';
import db from '../database';
class MateriasestudianteController {

    public async list(req : Request, res : Response): Promise<void>{
       const materias = await db.any('SELECT * from asignatura_nota');
       res.json(materias);
    }
    public async getOne(req: Request, res: Response): Promise<void>{
        var notas = new Array();
        const {id} = req.params;
        const id_nota = await db.any('SELECT id_nota from estudiante_nota WHERE codigo_estudiante = $1', [id]);
        for (let i in id_nota) {
            const idNota=id_nota[i].id_nota;
            const query =await db.any('SELECT codigo_asignatura from asignatura_nota WHERE id_nota = $1', [idNota]);
            const query2 = await db.any('SELECT codigo, nombre, grupo from asignatura WHERE codigo = $1', [query[0].codigo_asignatura]);
            const query3 = await db.any('SELECT nota1, porcentaje1, nota2, porcentaje2, nota3, porcentaje3, nota4, porcentaje4, nota5, porcentaje5, nota6, porcentaje6, laboratorio, porcentaje_lab, examen_final, porcentaje_ex, habilitacion, porcentaje_hab, definitiva from nota WHERE id_nota= $1',[idNota]);
            let tablaNotas = Object.assign(query2[0], query3[0]);
            notas.push(tablaNotas);
        }
        res.json(notas);
    }
}
const materiasestudianteController= new MateriasestudianteController();
export default materiasestudianteController;