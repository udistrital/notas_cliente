create database notas_ud;

use notas_ud;

CREATE TABLE Asignatura ( 
	Codigo integer NOT NULL,
	Nombre varchar(50) NOT NULL,
	Numero_Creditos integer NOT NULL,
	Proyecto_Curricular varchar(50) NOT NULL,
	Grupo varchar(10) NOT NULL,
	Codigo_Docente integer NOT NULL
)
;


CREATE TABLE Asignatura_Nota ( 
	Codigo_Asignatura integer,
	ID_Nota integer
)
;

CREATE TABLE Docente ( 
	Codigo integer NOT NULL
)
;

CREATE TABLE Estudiante ( 
	Codigo integer NOT NULL,
	Proyecto_Curricular varchar(50) NOT NULL
)
;

CREATE TABLE Estudiante_Asignatura ( 
	Codigo_Estudiante integer NOT NULL,
	Codigo_Asignaruta integer NOT NULL
)
;

CREATE TABLE Nota ( 
	Valor integer NOT NULL,
	Porcentaje bigint NOT NULL,
	ID_Nota integer NOT NULL
)
;

CREATE TABLE Estudiante_Nota
(
    codigo_estudiante integer,
    id_nota integer,
)
;


CREATE TABLE Usuario ( 
	Codigo integer NOT NULL,
	Nombre varchar(50) NOT NULL,
	Apellido varchar(50) NOT NULL,
	correo varchar(100) NOT NULL,
	token varchar(50) NOT NULL
)
;


ALTER TABLE Asignatura ADD CONSTRAINT PK_Asignatura 
	PRIMARY KEY (Codigo)
;


ALTER TABLE Docente ADD CONSTRAINT PK_Docente 
	PRIMARY KEY (Codigo)
;


ALTER TABLE Estudiante ADD CONSTRAINT PK_Estudiante 
	PRIMARY KEY (Codigo)
;


ALTER TABLE Nota ADD CONSTRAINT PK_Nota 
	PRIMARY KEY (ID_Nota)
;


ALTER TABLE Usuario ADD CONSTRAINT PK_Usuario 
	PRIMARY KEY (Codigo)
;



ALTER TABLE Asignatura
	ADD CONSTRAINT UQ_Asignatura_Codigo UNIQUE (Codigo)
;
ALTER TABLE Docente
	ADD CONSTRAINT UQ_Docente_Codigo UNIQUE (Codigo)
;
ALTER TABLE Estudiante
	ADD CONSTRAINT UQ_Estudiante_Codigo UNIQUE (Codigo)
;
ALTER TABLE Nota
	ADD CONSTRAINT UQ_Nota_ID_Nota UNIQUE (ID_Nota)
;
ALTER TABLE Usuario
	ADD CONSTRAINT UQ_Usuario_Codigo UNIQUE (Codigo)
;

ALTER TABLE Asignatura_Nota ADD CONSTRAINT FK_Asignatura_Nota_Asignatura 
	FOREIGN KEY (Codigo_Asignatura) REFERENCES Asignatura (Codigo)
ON UPDATE CASCADE
;

ALTER TABLE Asignatura_Nota ADD CONSTRAINT FK_Asignatura_Nota_Nota 
	FOREIGN KEY (ID_Nota) REFERENCES Nota (ID_Nota)
ON UPDATE CASCADE
;

ALTER TABLE Estudiante_Nota CONSTRAINT FK_Estudiante_Nota_Estudiante
	FOREIGN KEY (Codigo_Estudiante) REFERENCES Estudiante (Codigo)
ON UPDATE CASCADE
;

ALTER TABLE Estudiante_Nota CONSTRAINT FK_Estudiante_Nota_Nota
	FOREIGN KEY (ID_Nota) REFERENCES Nota (ID_Nota)
ON UPDATE CASCADE
;


ALTER TABLE Docente ADD CONSTRAINT FK_Docente_Usuario 
	FOREIGN KEY (Codigo) REFERENCES Usuario (Codigo)
ON UPDATE CASCADE
;

ALTER TABLE Estudiante_Asignatura ADD CONSTRAINT FK_Estudiante_Asignatura_Asignatura 
	FOREIGN KEY (Codigo_Asignaruta) REFERENCES Asignatura (Codigo)
ON UPDATE CASCADE
;

ALTER TABLE Estudiante_Asignatura ADD CONSTRAINT FK_Estudiante_Asignatura_Estudiante 
	FOREIGN KEY (Codigo_Estudiante) REFERENCES Estudiante (Codigo)
;
