CREATE DATABASE IF NOT EXISTS compArtigos;

CREATE TABLE compArtigos.user (
    `id` int,
    `name` varchar(255),
    `email` varchar(255),
    `password` varchar(255)
);