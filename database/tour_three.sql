CREATE DATABASE tour_three;

USE tour_three;

CREATE TABLE usuarios(
    id INT PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    password VARCHAR(40) NOT NULL
);

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    documento VARCHAR(30) NOT NULL,
    telefono VARCHAR(30) NOT NULL,
    deuda VARCHAR(30) NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE reservacion_detalles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fechaInicio DATE NOT NULL,
    fechaFinal DATE NOT NULL,
    precioTotal FLOAT NOT NULL,
    cliente_id INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE vehiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    precioXdia FLOAT NOT NULL,
    matricula VARCHAR(30) NOT NULL,
    modelo VARCHAR(30) NOT NULL,
    color VARCHAR(30) NOT NULL,
    necesitaReparacion BIT NOT NULL
);

CREATE TABLE registro_vehiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numVehiculos INT NOT NULL
);