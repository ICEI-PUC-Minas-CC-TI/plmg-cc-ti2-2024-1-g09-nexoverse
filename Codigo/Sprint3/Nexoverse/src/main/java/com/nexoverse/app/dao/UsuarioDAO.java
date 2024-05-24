package com.nexoverse.app.dao;

import java.sql.Connection;

import com.nexoverse.app.model.UsuarioModel;

public interface UsuarioDAO {

	    void salvarUsuario(UsuarioModel usuario, Connection connectD);

	    void atualizarUsuario(UsuarioModel usuario);

	    void removerUsuario(int idUsuario);

	    UsuarioModel buscarUsuarioPorId(int idUsuario);

}
