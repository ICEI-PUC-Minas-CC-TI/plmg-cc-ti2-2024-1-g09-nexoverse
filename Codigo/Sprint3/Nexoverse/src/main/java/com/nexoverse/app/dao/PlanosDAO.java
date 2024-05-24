package com.nexoverse.app.dao;

import java.util.List;

import com.nexoverse.app.model.PlanosModel;

public interface PlanosDAO {

    void salvarPlano(PlanosModel plano);

    void atualizarPlano(PlanosModel plano);

    void removerPlano(int idPlano);

    PlanosModel buscarPlanoPorId(int idPlano);

    List<PlanosModel> buscarTodosPlanos();
}