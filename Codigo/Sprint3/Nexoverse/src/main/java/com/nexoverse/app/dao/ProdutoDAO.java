package com.nexoverse.app.dao;

import java.util.List;

import com.nexoverse.app.model.ProdutoModel;

public interface ProdutoDAO {

    void salvarProduto(ProdutoModel produto);

    void atualizarProduto(ProdutoModel produto);

    void removerProduto(int idProduto);

    ProdutoModel buscarProdutoPorId(int idProduto);

    List<ProdutoModel> buscarTodosProdutos();
}