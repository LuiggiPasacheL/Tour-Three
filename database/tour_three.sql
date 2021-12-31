CREATE DATABASE tour_three;

USE tour_three;

CREATE TABLE usuario(
    id INT PRIMARY KEY,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL
);

CREATE TABLE cliente(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    telefono VARCHAR(30) NOT NULL,
    pais VARCHAR(30) NOT NULL,
    ciudad VARCHAR(30) NOT NULL,
    codPostal INT NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

CREATE TABLE vehiculo(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomVehiculo VARCHAR(30) NOT NULL,
    marca varchar(30) not null,
    kilometraje int not null,
    placa varchar(6) int not null
);

create table distrito(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomDistrito varchar(30) not null
);

create table pedido(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    distrito_id INT NOT NULL,
    vehiculo_id INT NOT NULL
    fch_inicio date not null,
    hor_inicio time not null,
    fch_fin date not null,
    hor_fin time not null,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (distrito_id) REFERENCES distrito(id),
    FOREIGN KEY (vehiculo_id) REFERENCES vehiculo(id)
);

create table tarjetaValida( //Lista de tarjetas validas
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(30) not null,
    numero int not null,
    cvv int not null,
    mes int not null,
    año int not null
);




