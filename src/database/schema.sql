-- comando para acessar o bash do banco de dados, lembrando, container tem que estar rodando.
-- docker exec -it pg bash
-- logar no banco de dados com os dados passados na variavel e ambiente.
-- psql -U root
-- Comando do Postigres para listar a base d dados :  \l 
-- E então executamos os comando SQL para criar a DATABASE e os demais tabelas do banco de dados.

-- Comandos
-- CREATE DATABASE mycontacts;
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- \c mycontacts;
-- CREATE TABLE IF NOT EXISTS categories(
--    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
--    name VARCHAR NOT NULL
--)
-- \l
-- \dt    Lista todos as Tabelas criados
-- CREATE TABLE IF NOT EXISTS contacts (
--    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(), 
--    name VARCHAR NOT NULL,
--    email VARCHAR UNIQUE,
--    phone VARCHAR,
--    category_id UUID,
--    FOREIGN KEY(category_id) REFERENCES categories(id)
--);
CREATE TABLE IF NOT EXISTS contacts (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(), 
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE,
    phone VARCHAR,
    category_id UUID,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);