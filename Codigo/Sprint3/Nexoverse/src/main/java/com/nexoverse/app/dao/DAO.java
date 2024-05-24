package com.nexoverse.app.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class DAO {
	private Connection conexao;
	
	public DAO() {		
		conexao = null;
	}	
	
	public boolean conectar() {
		String driverName = "org.postgresql.Driver";
		String servername = "localhost";
		String mydatabase = "nexoT";
		int porta = 5432;
		String url = "jdbc:postgresql://" + servername + ":" + porta + "/" + mydatabase;
		String username = "postgres";
		String password = "227076";
		boolean status = false;
		
		try {
			Class.forName(driverName);
			conexao = DriverManager.getConnection(url, username, password);
			status = (conexao == null);
			System.out.println("Conectou");
		}catch (ClassNotFoundException e) {
			 System.err.println("Conexão nao foi encontrada -- Driver não encontrado" + e.getMessage());
		}catch (SQLException e) {
			 System.err.println("Conexão nao foi encontrada -- " + e.getMessage());
		}
		return status;
	}
	
	public boolean close() {
		boolean status = false;
		
		try {
			conexao.close();
			status = true;
		}catch (SQLException e) {
			System.err.println(e.getMessage());
		}
		return status;
	}
}