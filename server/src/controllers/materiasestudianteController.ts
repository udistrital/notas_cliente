import {Request, Response} from 'express';
import db from '../database';
class MateriasestudianteController {

    public async list(req : Request, res : Response): Promise<void>{
       const materias = await db.any('SELECT * from asignatura_nota');
       res.json(materias);
    }
    public async getOne(req: Request, res: Response): Promise<void>{
        var notas = new Array();
        var notas_por_semestre=new Array();
        var numero_semestres= new Array();
        const {id} = req.params;
        const id_nota = await db.any('SELECT id_nota from estudiante_nota WHERE codigo_estudiante = $1', [id]);
        const n_asignaturas = await db.any('SELECT codigo_asignatura from estudiante_asignatura WHERE codigo_estudiante =$1 ', [id]);
        for(let i in n_asignaturas){
            const n_semestres = await db.any('SELECT semestre from asignatura WHERE codigo=$1',[n_asignaturas[i].codigo_asignatura]);
            numero_semestres.push(n_semestres[0].semestre);
        }
        const semestre_cursado= Math.max.apply(null, numero_semestres);
        console.log(semestre_cursado);
        for (var j=1; j<=semestre_cursado; j++){
            for (let i in id_nota) {
                const idNota=id_nota[i].id_nota;
                const query =await db.any('SELECT codigo_asignatura from asignatura_nota WHERE id_nota = $1', [idNota]);
                const querySemestre= await db.any('SELECT semestre from asignatura WHERE codigo =$1', [query[0].codigo_asignatura]);
                if(j === querySemestre[0].semestre){
                    const query2 = await db.any('SELECT codigo, nombre, numero_creditos, grupo from asignatura WHERE codigo = $1', [query[0].codigo_asignatura]);
                    const query3 = await db.any('SELECT nota1, porcentaje1, nota2, porcentaje2, nota3, porcentaje3, nota4, porcentaje4, nota5, porcentaje5, nota6, porcentaje6, laboratorio, porcentaje_lab, examen_final, porcentaje_ex, habilitacion, porcentaje_hab, definitiva from nota WHERE id_nota= $1',[idNota]);
                    let tablaNotas = Object.assign(query2[0], query3[0]);
                    notas.push(tablaNotas);
                } 
            }
            notas_por_semestre.push(notas);
            notas=[];
        }
        console.log(notas_por_semestre);
        res.json(notas_por_semestre);
    }
}
const materiasestudianteController= new MateriasestudianteController();
export default materiasestudianteController;