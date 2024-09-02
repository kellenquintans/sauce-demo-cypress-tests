/// <reference types="cypress" />

class InventoryPage {
    obterListaDeProdutos() {
      return cy.get('.inventory_item'); // Obtém a lista de produtos
    }
  
    obterProdutoPorNome(nome) {
      return cy.contains('.inventory_item_name', nome); // Obtém o produto pelo nome
    }
  }
  export default InventoryPage;