/// <reference types="cypress" />

import InventoryPage from '../pages/inventoryPage'; // Importa a classe InventoryPage
import LoginPage from '../pages/loginPage'; // Importa a classe LoginPage

describe('Visualização de Produtos', () => {
    const inventoryPage = new InventoryPage(); // Cria uma instância da página de inventário
    const loginPage = new LoginPage(); // Cria uma instância da página de login

    beforeEach(() => {
        // Realiza o login antes de acessar a página de produtos
        loginPage.acessar(); // Acessa a página de login
        loginPage.preencherUsuario('standard_user'); // Preenche o campo de usuário com 'standard_user'
        loginPage.preencherSenha('secret_sauce'); // Preenche o campo de senha com 'secret_sauce'
        loginPage.clicarBotaoLogin(); // Clica no botão de login
    });

    it('deve exibir a lista de produtos corretamente', () => {
        // Verifica se a lista de produtos está visível na página
        inventoryPage.obterListaDeProdutos().should('be.visible');
    });

    it('deve encontrar um produto específico pelo nome', () => {
        const nomeProduto = 'Sauce Labs Bike Light'; // Nome do produto a ser encontrado
        // Verifica se o produto com o nome especificado está visível na lista
        inventoryPage.obterProdutoPorNome(nomeProduto).should('be.visible');
    });
});