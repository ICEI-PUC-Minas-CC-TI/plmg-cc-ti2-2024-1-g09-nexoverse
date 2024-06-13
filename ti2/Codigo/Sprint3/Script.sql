-- Drop existing tables (if they exist)
DROP TABLE IF EXISTS Usuario_has_Noticia;
DROP TABLE IF EXISTS Usuario_has_Produto;
DROP TABLE IF EXISTS Usuario_has_Interesse;
DROP TABLE IF EXISTS Match;
DROP TABLE IF EXISTS Produto;
DROP TABLE IF EXISTS Interesse;
DROP TABLE IF EXISTS Noticia;
DROP TABLE IF EXISTS Usuario;
DROP TABLE IF EXISTS Plano;

-- Create the tables

-- Plano table
CREATE TABLE Plano (
  Id_plano SERIAL PRIMARY KEY,
  Preco DECIMAL(1000,2) NOT NULL,
  Descricao VARCHAR(500),
  Nome VARCHAR(45) NOT NULL,
  UNIQUE (Nome)
);

-- Usuario table
CREATE TABLE Usuario (
  UserID SERIAL PRIMARY KEY,
  Email VARCHAR(256) NOT NULL UNIQUE,
  UserName VARCHAR(256) NOT NULL,
  Senha VARCHAR(50) NOT NULL,
  FotoPerfil BYTEA,
  Plano_Tipo_plano INTEGER NOT NULL REFERENCES Plano(Id_plano) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- Noticia table
CREATE TABLE Noticia (
  ID_Noticia SERIAL PRIMARY KEY,
  Data DATE NOT NULL,
  Conteudo TEXT,  -- Removed NOT NULL constraint
  Titulo VARCHAR(30) NOT NULL,
  UNIQUE (Titulo)
);

-- Interesse table
CREATE TABLE Interesse (
  ID_Interesse SERIAL PRIMARY KEY,
  Descricao VARCHAR(150) NOT NULL,
  Nome_Interesse VARCHAR(40) NOT NULL,
  UNIQUE (Nome_Interesse)
);

-- Produto table
CREATE TABLE Produto (
  ID_Produtos SERIAL PRIMARY KEY,
  Descricao VARCHAR(180) NOT NULL,
  Nome VARCHAR(40) NOT NULL,
  Preco DECIMAL(1000, 2) NOT NULL,
  UNIQUE (Nome)
);

-- Match table (many-to-many relationship between Usuarios)
CREATE TABLE Match (
  idMatch SERIAL PRIMARY KEY,
  Usuario_UserID INTEGER NOT NULL REFERENCES Usuario(UserID) ON DELETE NO ACTION ON UPDATE NO ACTION,
  Usuario_UserID1 INTEGER NOT NULL REFERENCES Usuario(UserID) ON DELETE NO ACTION ON UPDATE NO ACTION,
  UNIQUE (Usuario_UserID, Usuario_UserID1)
);

-- Usuario_has_Interesse (many-to-many relationship between Usuario and Interesse)
CREATE TABLE Usuario_has_Interesse (
  Usuario_UserID INTEGER NOT NULL REFERENCES Usuario(UserID) ON DELETE NO ACTION ON UPDATE NO ACTION,
  Interesse_IdInteresse INTEGER NOT NULL REFERENCES Interesse(ID_Interesse) ON DELETE NO ACTION ON UPDATE NO ACTION,
  PRIMARY KEY (Interesse_IdInteresse, Usuario_UserID)
);

-- Usuario_has_Produto (many-to-many relationship between Usuario and Produto)
CREATE TABLE Usuario_has_Produto (
  Usuario_UserID INTEGER NOT NULL REFERENCES Usuario(UserID) ON DELETE NO ACTION ON UPDATE NO ACTION,
  Produto_ID_Produto INTEGER NOT NULL REFERENCES Produto(ID_Produtos) ON DELETE NO ACTION ON UPDATE NO ACTION,
  PRIMARY KEY (Produto_ID_Produto, Usuario_UserID)
);

-- Usuario_has_Noticia (many-to-many relationship between Usuario and Noticia)
CREATE TABLE Usuario_has_Noticia (
  Usuario_UserID INTEGER NOT NULL REFERENCES Usuario(UserID) ON DELETE NO ACTION ON UPDATE NO ACTION,
  Noticia_ID_Noticia INTEGER NOT NULL REFERENCES Noticia(ID_Noticia) ON DELETE NO ACTION ON UPDATE NO ACTION,
  PRIMARY KEY (Noticia_ID_Noticia, Usuario_UserID)
);
