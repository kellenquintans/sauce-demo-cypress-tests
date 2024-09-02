/// <reference types="cypress" />

import LoginPage from '../pages/loginPage'; // Importa a classe LoginPage

describe('Login', () => {
    const loginPage = new LoginPage();

    it('deve fazer login com credenciais válidas', () => {
        loginPage.acessar(); // Método atualizado para acessar a página
        loginPage.preencherUsuario('standard_user'); // Método atualizado para preencher o usuário
        loginPage.preencherSenha('secret_sauce'); // Método atualizado para preencher a senha
        loginPage.clicarBotaoLogin(); // Método atualizado para clicar no botão de login

        // Asserções para verificar se o login foi bem-sucedido
        cy.url().should('include', '/inventory');
    });

    it('deve mostrar uma mensagem de erro com credenciais inválidas', () => {
        loginPage.acessar(); // Método atualizado para acessar a página
        loginPage.preencherUsuario('usuario_invalido'); // Nome de usuário inválido
        loginPage.preencherSenha('senha_errada'); // Senha inválida
        loginPage.clicarBotaoLogin(); // Método atualizado para clicar no botão de login

        // Asserção para verificar se a mensagem de erro é exibida
        loginPage.deveExibirMensagemErro('Epic sadface: Username and password do not match any user in this service'); // Mensagem de erro esperada
    });
});