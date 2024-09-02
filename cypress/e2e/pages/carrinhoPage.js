/// <reference types="cypress" />

class CarrinhoPage {
    // Método para obter o botão "Adicionar ao Carrinho" do produto especificado
    obterBotaoAdicionarAoCarrinho(productName) {
        return cy.contains('.inventory_item', productName)
            .find('button.btn_primary.btn_inventory'); // Encontra o botão de adicionar ao carrinho dentro do item
    }

    // Método para adicionar um produto ao carrinho
    adicionarProdutoAoCarrinho(productName) {
        this.obterBotaoAdicionarAoCarrinho(productName).click(); // Clica no botão de adicionar ao carrinho
    }

    // Método para obter o ícone do carrinho de compras
    obterIconeCarrinho() {
        return cy.get('#shopping_cart_container'); // Encontra o ícone do carrinho de compras
    }

    // Método para clicar no ícone do carrinho de compras
    clicarNoCarrinhoDeCompras() {
        this.obterIconeCarrinho().click(); // Clica no ícone do carrinho de compras
    }

    // Método para verificar se um produto foi adicionado ao carrinho
    verificarProdutoNoCarrinho(productName) {
        cy.get('.cart_item').should('contain', productName); // Verifica se o produto está presente no carrinho
    }

    // Método para remover todos os produtos do carrinho
    removerTodosOsProdutosDoCarrinho() {
        // Itera sobre cada item no carrinho e clica no botão de remover
        cy.get('.cart_item').each(($item) => {
            cy.wrap($item).find('button.btn_secondary.cart_button').click(); // Remove o produto do carrinho
        });
        // Verifica se o carrinho está vazio após a remoção
        cy.get('.cart_item').should('not.exist');
    }
}

export default CarrinhoPage;