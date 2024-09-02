/// <reference types="cypress" />

import CarrinhoPage from '../pages/carrinhoPage'; // Importa a página do carrinho de compras
import LoginPage from '../pages/loginPage'; // Importa a página de login

describe('Adicionar Produtos ao Carrinho', () => {
    const loginPage = new LoginPage(); // Cria uma instância da página de login
    const carrinhoPage = new CarrinhoPage(); // Cria uma instância da página do carrinho

    beforeEach(() => {
        // Realiza o login antes de acessar a página de produtos
        loginPage.acessar(); // Acessa a página de login
        loginPage.preencherUsuario('standard_user'); // Preenche o campo de usuário com 'standard_user'
        loginPage.preencherSenha('secret_sauce'); // Preenche o campo de senha com 'secret_sauce'
        loginPage.clicarBotaoLogin(); // Clica no botão de login
    });

    it('deve adicionar um produto ao carrinho', () => {
        // Adiciona um produto específico ao carrinho
        carrinhoPage.adicionarProdutoAoCarrinho('Sauce Labs Backpack'); // Adiciona o produto ao carrinho

        // Verifica se o produto foi adicionado ao carrinho
        carrinhoPage.clicarNoCarrinhoDeCompras(); // Acessa a página do carrinho
        carrinhoPage.verificarProdutoNoCarrinho('Sauce Labs Backpack'); // Verifica a presença do produto no carrinho
    });

    it('deve adicionar vários produtos ao carrinho', () => {
        // Adiciona vários produtos ao carrinho
        carrinhoPage.adicionarProdutoAoCarrinho('Sauce Labs Backpack'); // Adiciona o primeiro produto
        carrinhoPage.adicionarProdutoAoCarrinho('Sauce Labs Bike Light'); // Adiciona o segundo produto

        // Verifica se os produtos foram adicionados ao carrinho
        carrinhoPage.clicarNoCarrinhoDeCompras(); // Acessa a página do carrinho
        carrinhoPage.verificarProdutoNoCarrinho('Sauce Labs Backpack'); // Verifica a presença do primeiro produto
        carrinhoPage.verificarProdutoNoCarrinho('Sauce Labs Bike Light'); // Verifica a presença do segundo produto
    });

    it('deve remover todos os produtos do carrinho', () => {
        // Adiciona produtos ao carrinho
        carrinhoPage.adicionarProdutoAoCarrinho('Sauce Labs Backpack'); // Adiciona o primeiro produto
        carrinhoPage.adicionarProdutoAoCarrinho('Sauce Labs Bike Light'); // Adiciona o segundo produto
        carrinhoPage.clicarNoCarrinhoDeCompras(); // Acessa a página do carrinho

        // Remove todos os produtos do carrinho
        carrinhoPage.removerTodosOsProdutosDoCarrinho(); // Remove todos os produtos do carrinho
    });
});