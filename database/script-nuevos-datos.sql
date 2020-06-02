INSERT INTO usuario (codigo, nombre, apellido, correo, token) VALUES (460, 'Felipe', 'Barreto', 'felipe@correo.com', 7);
INSERT INTO usuario (codigo, nombre, apellido, correo, token) VALUES (461, 'Sara', 'Martinez', 'sara@correo.com', 8);

INSERT INTO docente (codigo) VALUES (460);
INSERT INTO docente (codigo) VALUES (461);

INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente, semestre) VALUES (10, 'Calculo Diferencial', 4, 'Ingenieria de Sistemas', 83, 456, 1);
INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente, semestre) VALUES (11, 'Calculo Integral', 3, 'Ingenieria de Sistemas', 82, 457, 2);
INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente, semestre) VALUES (12, 'Calculo Multivariado', 3, 'Ingenieria de Sistemas', 84, 458, 3);
INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente, semestre) VALUES (13, 'Programacion Basica', 3, 'Ingenieria de Sistemas', 83, 456, 1);
INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente, semestre) VALUES (14, 'Programacion Orientada a Objetos', 3, 'Ingenieria de Sistemas', 82, 457, 2);
INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente, semestre) VALUES (15, 'Programacion Avanzada', 3, 'Ingenieria de Sistemas', 84, 458, 3);
INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente, semestre) VALUES (16, 'Fisica I', 3, 'Ingenieria de Sistemas', 83, 456, 2);
INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente, semestre) VALUES (17, 'Fisica II', 3, 'Ingenieria de Sistemas', 82, 457, 3);
INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente, semestre) VALUES (18, 'Fisica III', 1, 'Ingenieria de Sistemas', 84, 458, 5);

INSERT INTO nota (id_nota, nota1, porcentaje1, nota2, porcentaje2, laboratorio, porcentaje_lab, examen_final, porcentaje_ex) VALUES (1001, 40, 20, 40, 30, 40, 20, 40, 30);
INSERT INTO nota (id_nota, nota1, porcentaje1, nota4, porcentaje4, nota5, porcentaje5, nota6, porcentaje6, examen_final, porcentaje_ex) VALUES (1002, 35, 15, 35, 15, 35, 20, 35, 20, 35, 30);
INSERT INTO nota (id_nota, nota1, porcentaje1, nota2, porcentaje2, laboratorio, porcentaje_lab, examen_final, porcentaje_ex) VALUES (1003, 38, 20, 38, 30, 38, 20, 38, 30);
INSERT INTO nota (id_nota, nota1, porcentaje1, nota4, porcentaje4, nota5, porcentaje5, nota6, porcentaje6, examen_final, porcentaje_ex) VALUES (1004, 45, 15, 45, 15, 45, 20, 45, 20, 45, 30);
INSERT INTO nota (id_nota, nota1, porcentaje1, nota2, porcentaje2, laboratorio, porcentaje_lab, examen_final, porcentaje_ex) VALUES (1005, 48, 20, 48, 30, 48, 20, 48, 30);
INSERT INTO nota (id_nota, nota1, porcentaje1, nota4, porcentaje4, nota5, porcentaje5, nota6, porcentaje6, examen_final, porcentaje_ex) VALUES (1006, 33, 15, 33, 15, 33, 20, 33, 20, 33, 30);
INSERT INTO nota (id_nota, nota1, porcentaje1, nota2, porcentaje2, laboratorio, porcentaje_lab, examen_final, porcentaje_ex) VALUES (1007, 27, 20, 27, 30, 27, 20, 27, 30);
INSERT INTO nota (id_nota, nota1, porcentaje1, nota4, porcentaje4, nota5, porcentaje5, nota6, porcentaje6, examen_final, porcentaje_ex) VALUES (1008, 42, 15, 42, 15, 42, 20, 42, 20, 42, 30);
INSERT INTO nota (id_nota, nota1, porcentaje1, nota2, porcentaje2, laboratorio, porcentaje_lab, examen_final, porcentaje_ex) VALUES (1009, 31, 20, 31, 30, 31, 20, 31, 30);

INSERT INTO asignatura_nota (codigo_asignatura, id_nota) VALUES (10, 1001);
INSERT INTO asignatura_nota (codigo_asignatura, id_nota) VALUES (11, 1002);
INSERT INTO asignatura_nota (codigo_asignatura, id_nota) VALUES (12, 1003);
INSERT INTO asignatura_nota (codigo_asignatura, id_nota) VALUES (13, 1004);
INSERT INTO asignatura_nota (codigo_asignatura, id_nota) VALUES (14, 1005);
INSERT INTO asignatura_nota (codigo_asignatura, id_nota) VALUES (15, 1006);
INSERT INTO asignatura_nota (codigo_asignatura, id_nota) VALUES (16, 1007);
INSERT INTO asignatura_nota (codigo_asignatura, id_nota) VALUES (17, 1008);
INSERT INTO asignatura_nota (codigo_asignatura, id_nota) VALUES (18, 1009);

INSERT INTO estudiante_asignatura (codigo_estudiante, codigo_asignatura) VALUES (123, 10);
INSERT INTO estudiante_asignatura (codigo_estudiante, codigo_asignatura) VALUES (123, 13);
INSERT INTO estudiante_asignatura (codigo_estudiante, codigo_asignatura) VALUES (123, 14);
INSERT INTO estudiante_asignatura (codigo_estudiante, codigo_asignatura) VALUES (123, 15);
INSERT INTO estudiante_asignatura (codigo_estudiante, codigo_asignatura) VALUES (123, 11);
INSERT INTO estudiante_asignatura (codigo_estudiante, codigo_asignatura) VALUES (123, 16);
INSERT INTO estudiante_asignatura (codigo_estudiante, codigo_asignatura) VALUES (123, 17);
INSERT INTO estudiante_asignatura (codigo_estudiante, codigo_asignatura) VALUES (123, 18);
INSERT INTO estudiante_asignatura (codigo_estudiante, codigo_asignatura) VALUES (123, 19);

INSERT INTO docente_asignatura (codigo_docente, codigo_asignatura) VALUES (460, 10);
INSERT INTO docente_asignatura (codigo_docente, codigo_asignatura) VALUES (460, 11);
INSERT INTO docente_asignatura (codigo_docente, codigo_asignatura) VALUES (460, 12);
INSERT INTO docente_asignatura (codigo_docente, codigo_asignatura) VALUES (460, 16);
INSERT INTO docente_asignatura (codigo_docente, codigo_asignatura) VALUES (460, 17);
INSERT INTO docente_asignatura (codigo_docente, codigo_asignatura) VALUES (460, 18);
INSERT INTO docente_asignatura (codigo_docente, codigo_asignatura) VALUES (460, 13);
INSERT INTO docente_asignatura (codigo_docente, codigo_asignatura) VALUES (460, 14);
INSERT INTO docente_asignatura (codigo_docente, codigo_asignatura) VALUES (460, 15);

