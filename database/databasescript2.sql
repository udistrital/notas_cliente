ALTER TABLE nota RENAME valor to nota1;
ALTER TABLE nota RENAME porcentaje to porcentaje1;
ALTER TABLE estudiante_asignatura RENAME codigo_asignaruta to codigo_asignatura;

ALTER TABLE nota ALTER COLUMN nota1 DROP NOT NULL;
ALTER TABLE nota ALTER COLUMN porcentaje1 DROP NOT NULL;

ALTER TABLE nota ALTER COLUMN porcentaje1 TYPE integer;

ALTER TABLE nota ADD COLUMN nota2 integer;
ALTER TABLE nota ADD COLUMN porcentaje2 integer;
ALTER TABLE nota ADD COLUMN nota3 integer;
ALTER TABLE nota ADD COLUMN porcentaje3 integer;
ALTER TABLE nota ADD COLUMN nota4 integer;
ALTER TABLE nota ADD COLUMN porcentaje4 integer;
ALTER TABLE nota ADD COLUMN nota5 integer;
ALTER TABLE nota ADD COLUMN porcentaje5 integer;
ALTER TABLE nota ADD COLUMN nota6 integer;
ALTER TABLE nota ADD COLUMN porcentaje6 integer;
ALTER TABLE nota ADD COLUMN laboratorio integer;
ALTER TABLE nota ADD COLUMN porcentaje_lab integer;
ALTER TABLE nota ADD COLUMN examen_final integer;
ALTER TABLE nota ADD COLUMN porcentaje_ex integer;
ALTER TABLE nota ADD COLUMN habilitacion integer;
ALTER TABLE nota ADD COLUMN porcentaje_hab integer;

CREATE TABLE public.docente_asignatura
(
    codigo_docente integer NOT NULL,
    codigo_asignaruta integer NOT NULL,
    CONSTRAINT fk_docente_asignatura_asignatura FOREIGN KEY (codigo_asignaruta)
        REFERENCES public.asignatura (codigo) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION,
    CONSTRAINT fk_docente_asignatura_estudiante FOREIGN KEY (codigo_docente)
        REFERENCES public.docente (codigo) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.docente_asignatura
    OWNER to postgres;

INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente) VALUES (1, 'Bases de Datos', 3, 'Ingenieria de Sistemas', 83, 456);
INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente) VALUES (2, 'Redes de Comunicación I', 3, 'Ingenieria de Sistemas', 82, 457);
INSERT INTO asignatura (codigo, nombre, numero_creditos, proyecto_curricular, grupo, codigo_docente) VALUES (3, 'Ciencias de la computación 3', 1, 'Ingenieria de Sistemas', 84, 458);

INSERT INTO usuario (codigo, nombre, apellido, correo, token) VALUES (123, 'Juan', 'Perez', 'juan@correo.com', 1);
INSERT INTO usuario (codigo, nombre, apellido, correo, token) VALUES (124, 'Pablo', 'Gonzales', 'pablo@correo.com', 2);
INSERT INTO usuario (codigo, nombre, apellido, correo, token) VALUES (456, 'Andres', 'Morales', 'andres@correo.com', 3);
INSERT INTO usuario (codigo, nombre, apellido, correo, token) VALUES (457, 'Camilo', 'Ayala', 'camilo@correo.com', 4);

INSERT INTO estudiante (codigo, proyecto_curricular) VALUES (123, 'Ingenieria de Sistemas');
INSERT INTO estudiante (codigo, proyecto_curricular) VALUES (124, 'Ingenieria Electronica');

INSERT INTO docente (codigo) VALUES (456);
INSERT INTO docente (codigo) VALUES (457);

INSERT INTO nota (id_nota, nota1, porcentaje1, nota2, porcentaje2, laboratorio, porcentaje_lab, examen_final, porcentaje_ex) VALUES (100, 50, 20, 40, 30, 40, 20, 30, 30);
INSERT INTO nota (id_nota, nota1, porcentaje1, nota4, porcentaje4, nota5, porcentaje5, nota6, porcentaje6, examen_final, porcentaje_ex) VALUES (101, 20, 15, 40, 15, 35, 20, 30, 20, 50, 30);

INSERT INTO asignatura_nota (codigo_asignatura, id_nota) VALUES (1, 100);
INSERT INTO asignatura_nota (codigo_asignatura, id_nota) VALUES (2, 101);

INSERT INTO estudiante_asignatura (codigo_estudiante, codigo_asignatura) VALUES (123, 1);
INSERT INTO estudiante_asignatura (codigo_estudiante, codigo_asignatura) VALUES (123, 2);

INSERT INTO docente_asignatura (codigo_docente, codigo_asignatura) VALUES (456, 1);
INSERT INTO docente_asignatura (codigo_docente, codigo_asignatura) VALUES (457, 2);