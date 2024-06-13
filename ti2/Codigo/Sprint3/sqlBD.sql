-- Drop existing tables (if they exist)
DROP TABLE IF EXISTS "Match";
DROP TABLE IF EXISTS "Usuario_has_Produtos";
DROP TABLE IF EXISTS "Usuario_has_Interesse";
DROP TABLE IF EXISTS "Usuario_has_Noticia";
DROP TABLE IF EXISTS "Usuario";
DROP TABLE IF EXISTS "Produtos";
DROP TABLE IF EXISTS "Interesse";
DROP TABLE IF EXISTS "Noticia";
DROP TABLE IF EXISTS "Planos";

-- Create the tables

-- Planos table
CREATE TABLE "Planos" (
  "Id_plano" SERIAL PRIMARY KEY,
  "Preco" VARCHAR(40) NOT NULL,
  "Descricao" VARCHAR(500),
  "Nome" VARCHAR(45) NOT NULL,
  UNIQUE ( "Nome" )
);

-- Usuario table
CREATE TABLE "Usuario" (
  "UserID" SERIAL PRIMARY KEY,
  "Email" VARCHAR(256) NOT NULL UNIQUE,
  "UserName" VARCHAR(256) NOT NULL,
  "Senha" VARCHAR(50) NOT NULL,
  "FotoPerfil" BYTEA,
  "Assinatura" SMALLINT NOT NULL,
  "Planos_Tipo_plano" INT NOT NULL REFERENCES "Planos" ("Id_plano") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- Noticia table
CREATE TABLE "Noticia" (
  "ID_Noticia" SERIAL PRIMARY KEY,
  "Data" DATE NOT NULL,
  "Conteudo" TEXT NOT NULL,
  "Titulo" VARCHAR(30) NOT NULL,
  UNIQUE ( "Titulo" )
);

-- Interesse table
CREATE TABLE "Interesse" (
  "ID_Interesse" SERIAL PRIMARY KEY,
  "Descricao" VARCHAR(150) NOT NULL,
  "Nome_Interesse" VARCHAR(40) NOT NULL,
  UNIQUE ( "Nome_Interesse" )
);

-- Produtos table
CREATE TABLE "Produtos" (
  "ID_Produtos" SERIAL PRIMARY KEY,
  "Descricao" VARCHAR(180) NOT NULL,
  "Nome" VARCHAR(40) NOT NULL,
  "Preco" DECIMAL(1000, 2) NOT NULL,
  UNIQUE ( "Nome" )
);

-- Match table
CREATE TABLE "Match" (
  "Usuario_UserID" INT NOT NULL REFERENCES "Usuario" ("UserID") ON DELETE NO ACTION ON UPDATE NO ACTION,
  "Usuario_UserID1" INT NOT NULL REFERENCES "Usuario" ("UserID") ON DELETE NO ACTION ON UPDATE NO ACTION,
  PRIMARY KEY ( "Usuario_UserID1", "Usuario_UserID" )
);

-- Usuario_has_Interesse table
CREATE TABLE "Usuario_has_Interesse" (
  "Usuario_UserID" INT NOT NULL REFERENCES "Usuario" ("UserID") ON DELETE NO ACTION ON UPDATE NO ACTION,
  "Interesse_IdInteresse" INT NOT NULL REFERENCES "Interesse" ("ID_Interesse") ON DELETE NO ACTION ON UPDATE NO ACTION,
  PRIMARY KEY ( "Interesse_IdInteresse", "Usuario_UserID" )
);

-- Usuario_has_Produtos table
CREATE TABLE "Usuario_has_Produtos" (
  "Usuario_UserID" INT NOT NULL REFERENCES "Usuario" ("UserID") ON DELETE NO ACTION ON UPDATE NO ACTION,
  "Produtos_ID_Produtos" INT NOT NULL REFERENCES "Produtos" ("ID_Produtos") ON DELETE NO ACTION ON UPDATE NO ACTION,
  PRIMARY KEY ( "Produtos_ID_Produtos", "Usuario_UserID" )
);

-- Usuario_has_Noticia table
CREATE TABLE "Usuario_has_Noticia" (
  "Usuario_UserID" INT NOT NULL REFERENCES "Usuario" ("UserID") ON DELETE NO ACTION ON UPDATE NO ACTION,
  "Noticia_ID_Noticia" INT NOT NULL REFERENCES "Noticia" ("ID_Noticia") ON DELETE NO ACTION ON UPDATE NO ACTION,
  PRIMARY KEY ( "Noticia_ID_Noticia", "Usuario_UserID" )
);
