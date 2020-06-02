CREATE TABLE public.estudiante_nota
(
    codigo_estudiante integer,
    id_nota integer,
    CONSTRAINT fk_estudiante_nota_estudiante FOREIGN KEY (codigo_estudiante)
        REFERENCES public.estudiante (codigo) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION,
    CONSTRAINT fk_estudiante_nota_nota FOREIGN KEY (id_nota)
        REFERENCES public.nota (id_nota) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION
)

insert into estudiante_nota (codigo_estudiante, id_nota) values (123, 100);
insert into estudiante_nota (codigo_estudiante, id_nota) values (124, 101);
