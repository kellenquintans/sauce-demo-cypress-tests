/// <reference types="cypress" />

class FinalizarCompraPage {
    // Clica no botão de checkout para iniciar o processo de finalização de compra
    clicarCheckout() {
        cy.get('a.checkout_button').click();
    }

    // Preenche o formulário de checkout com as informações fornecidas
    preencherFormulario({ firstName, lastName, postalCode }) {
        cy.get('#first-name').type(firstName); // Preenche o campo do primeiro nome
        cy.get('#last-name').type(lastName); // Preenche o campo do sobrenome
        cy.get('#postal-code').type(postalCode); // Preenche o campo do código postal
    }

    // Clica no botão para continuar para a próxima etapa
    clicarContinuar() {
        cy.get('input.btn_primary').click();
    }

    // Verifica se os produtos no carrinho e o valor total estão corretos
    verificarProdutos() {
        // Adiciona um log para confirmar o número de produtos no carrinho
        cy.get('.cart_item').then($items => {
            cy.log('Número de produtos no carrinho:', $items.length);

            // Verifica se a quantidade de produtos é a esperada
            const expectedNumberOfItems = 1; // Verifique o número de produtos esperado no carrinho
            expect($items).to.have.length(expectedNumberOfItems);
        });

        // Verifica o valor total da compra
        cy.get('.summary_total_label').then($total => {
            cy.log('Total atual:', $total.text());
            // Verifica se o valor total corresponde ao esperado
            expect($total.text()).to.contain('Total: $32.39'); // Verifique o valor total esperado
        });
    }

    // Finaliza a compra clicando no botão correspondente
    finalizarCompra() {
        cy.get('a.btn_action.cart_button').click();
    }

    // Verifica se a compra foi finalizada com sucesso
    verificarCompraFinalizada() {
        cy.url().should('include', '/checkout-complete.html'); // Verifica se a URL inclui a página de finalização
        cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER'); // Verifica se a mensagem de sucesso está presente
    }
}

export default FinalizarCompraPage;