package com.nexoverse.app.dao;

import com.nexoverse.app.model.InteresseModel;

public interface InteresseDAO {

    void salvarInteresse(InteresseModel interesse);

    void atualizarInteresse(InteresseModel interesse);

    void removerInteresse(int idInteresse);

    InteresseModel buscarInteressePorId(int idInteresse);

}
