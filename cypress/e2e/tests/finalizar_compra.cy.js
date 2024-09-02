/// <reference types="cypress" />

import CarrinhoPage from '../pages/carrinhoPage'; // Importa a página do carrinho de compras
import LoginPage from '../pages/loginPage'; // Importa a página de login
import FinalizarCompraPage from '../pages/finalizarCompraPage'; // Importa a página de finalização de compra

describe('Adicionar Produtos ao Carrinho e Finalizar Compra', () => {
  const loginPage = new LoginPage(); // Cria uma instância da página de login
  const carrinhoPage = new CarrinhoPage(); // Cria uma instância da página do carrinho
  const finalizarCompraPage = new FinalizarCompraPage(); // Cria uma instância da página de finalização de compra

  beforeEach(() => {
    // Realiza o login antes de acessar a página de produtos
    loginPage.acessar(); // Acessa a página de login
    loginPage.preencherUsuario('standard_user'); // Preenche o campo de usuário
    loginPage.preencherSenha('secret_sauce'); // Preenche o campo de senha
    loginPage.clicarBotaoLogin(); // Clica no botão de login
  });

  it('deve adicionar um produto ao carrinho e finalizar a compra', () => {
    // Adiciona um produto específico ao carrinho
    carrinhoPage.adicionarProdutoAoCarrinho('Sauce Labs Backpack'); // Método para adicionar o produto

    // Verifica se o produto foi adicionado ao carrinho
    carrinhoPage.clicarNoCarrinhoDeCompras(); // Acessa a página do carrinho
    carrinhoPage.verificarProdutoNoCarrinho('Sauce Labs Backpack'); // Verifica a presença do produto no carrinho

    // Finaliza a compra
    finalizarCompraPage.clicarCheckout(); // Clica no botão de checkout
    finalizarCompraPage.preencherFormulario({
      firstName: 'John', // Nome do usuário
      lastName: 'Doe', // Sobrenome do usuário
      postalCode: '12345' // Código postal do usuário
    });
    finalizarCompraPage.clicarContinuar(); // Clica para continuar para a próxima etapa
    finalizarCompraPage.verificarProdutos(); // Verifica os produtos e o valor total no carrinho
    finalizarCompraPage.finalizarCompra(); // Finaliza a compra
    finalizarCompraPage.verificarCompraFinalizada(); // Verifica se a compra foi finalizada com sucesso
  });
});