CREATE DATABASE saei;
USE saei;

INSERT INTO user (nombre, apellido, email, telefono, dni, direccion, contraseña, tipo, first_time) VALUES ('Franco', 'Admin', 'admin@admin.com', '1111-1111', '11111111', 'Gral. Mansilla 677', '751cb3f4aa17c36186f4856c8982bf27', 'Administrador', 0);

CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(255) NOT NULL,
    apellido varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    telefono varchar(255) NOT NULL,
    dni int NOT NULL,
    direccion varchar(255) NOT NULL,
    contraseña varchar(255) NOT NULL,
    tipo varchar(30) NOT NULL,
    first_time tinyint(1) DEFAULT NULL
);

CREATE TABLE alumnos (
    alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    curso_id INT,
	FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (curso_id) REFERENCES curso(curso_id)
);

CREATE TABLE docente (
	docente_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,

    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE curso (
	curso_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    curso VARCHAR(15)
);

CREATE TABLE materia (
	id_materia INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    docente_id INT,
    curso_id INT,
    FOREIGN KEY (docente_id) REFERENCES docente(docente_id),
    FOREIGN KEY (curso_id) REFERENCES curso(curso_id)
);

INSERT INTO curso (curso) VALUES ('1° A');
INSERT INTO curso (curso) VALUES ('1° B');
INSERT INTO curso (curso) VALUES ('1° C');
INSERT INTO curso (curso) VALUES ('1° D');
INSERT INTO curso (curso) VALUES ('1° E');
INSERT INTO curso (curso) VALUES ('1° F');
INSERT INTO curso (curso) VALUES ('2° A');
INSERT INTO curso (curso) VALUES ('2° B');
INSERT INTO curso (curso) VALUES ('2° C');
INSERT INTO curso (curso) VALUES ('2° D');
INSERT INTO curso (curso) VALUES ('2° E');
INSERT INTO curso (curso) VALUES ('3° A');
INSERT INTO curso (curso) VALUES ('3° B');
INSERT INTO curso (curso) VALUES ('3° C');
INSERT INTO curso (curso) VALUES ('3° D');
INSERT INTO curso (curso) VALUES ('4° 1° I.P.P.');
INSERT INTO curso (curso) VALUES ('4° 2° I.P.P.');
INSERT INTO curso (curso) VALUES ('4° 3° I.P.P.');
INSERT INTO curso (curso) VALUES ('5° 1° I.P.P.');
INSERT INTO curso (curso) VALUES ('5° 2° I.P.P.');
INSERT INTO curso (curso) VALUES ('6° 1° I.P.P.');
INSERT INTO curso (curso) VALUES ('6° 2° I.P.P.');
INSERT INTO curso (curso) VALUES ('7° I.P.P.');
INSERT INTO curso (curso) VALUES ('4° 1° M.M.O.');
INSERT INTO curso (curso) VALUES ('4° 2° M.M.O.');
INSERT INTO curso (curso) VALUES ('5° 1° M.M.O.');
INSERT INTO curso (curso) VALUES ('5° 2° M.M.O.');
INSERT INTO curso (curso) VALUES ('6° 1° M.M.O.');
INSERT INTO curso (curso) VALUES ('7° M.M.O.');
INSERT INTO curso (curso) VALUES ('4° 1° T.Q.');
INSERT INTO curso (curso) VALUES ('4° 2° T.Q.');
INSERT INTO curso (curso) VALUES ('5° 1° T.Q.');
INSERT INTO curso (curso) VALUES ('6° T.Q.');
INSERT INTO curso (curso) VALUES ('7° T.Q.');

SELECT u.id, u.nombre, u.apellido, u.email, u.telefono, u.dni, u.direccion, u.contraseña, u.tipo, a.alumno_id, c.curso_id FROM alumnos AS a INNER JOIN curso AS c ON a.curso_id = c.curso_id INNER JOIN user AS u ON u.id = a.user_id;
CREATE VIEW datos_alumnos AS SELECT u.id, u.nombre, u.apellido, u.email, u.telefono, u.dni, u.direccion, u.contraseña, u.tipo, a.alumno_id, c.curso_id FROM alumnos AS a INNER JOIN curso AS c ON a.curso_id = c.curso_id INNER JOIN user AS u ON u.id = a.user_id;

SELECT * FROM datos_alumnos;