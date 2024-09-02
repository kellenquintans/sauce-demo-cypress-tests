/// <reference types="cypress" />

class LoginPage {
    constructor() {
      this.campoUsuario = '[data-test="username"]'; // Nome do campo de usuário
      this.campoSenha = '[data-test="password"]'; // Nome do campo de senha
      this.botaoLogin = '#login-button'; // Botão de login
      this.mensagemErro = '[data-test="error"]'; // Mensagem de erro
    }
  
    acessar() {
      cy.visit('https://www.saucedemo.com/v1/'); // Acessa a página de login
    }
  
    preencherUsuario(usuario) {
      cy.get(this.campoUsuario).type(usuario); // Preenche o campo de usuário
    }
  
    preencherSenha(senha) {
      cy.get(this.campoSenha).type(senha); // Preenche o campo de senha
    }
  
    clicarBotaoLogin() {
      cy.get(this.botaoLogin).click(); // Clica no botão de login
    }
  
    deveExibirMensagemErro(mensagem) {
      cy.get(this.mensagemErro).should('contain.text', mensagem); // Verifica se a mensagem de erro é exibida
    }
  }
  
  export default LoginPage;