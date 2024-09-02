# sauce-demo-cypress-tests

Repositório de testes automatizados para o site Sauce Demo utilizando Cypress e JavaScript. Os testes cobrem login, visualização de produtos, gerenciamento de carrinho e finalização de compra, seguindo boas práticas de automação com o modelo Page Object (POM) e controle de versão com Git.

# Configuração e Execução dos Testes com Cypress

## Introdução

Este documento orienta sobre como configurar e executar os testes automatizados para o site Sauce Demo utilizando Cypress.

## Requisitos

- **Node.js** e **npm** instalados.

## Passos para Configuração

1. **Clone o Repositório:**

    ```bash
    git clone https://github.com/kellenquintans/sauce-demo-cypress-tests.git
    cd sauce-demo-cypress-tests
    ```

2. **Inicialize o Projeto (se necessário):**

    Se o projeto ainda não tiver um `package.json`, inicialize-o com o comando:
    
    ```bash
    npm init -y
    ```

3. **Instale o Cypress:**

    ```bash
    npm install cypress --save-dev
    ```

4. **Abra o Cypress Test Runner:**

    ```bash
    npx cypress open
    ```

    - Alternativamente, execute os testes em modo headless:
      ```bash
      npx cypress run
      ```

## Estrutura dos Testes

Os testes estão organizados na pasta `cypress/e2e`. Dentro dela, você encontrará:

- **Pasta `tests`:** Contém os arquivos de teste, como `login.cy.js`, que incluem os cenários de teste.
- **Pasta `pages`:** Contém os arquivos de page objects, que abstraem a interação com os elementos da página.

## Executando Testes Específicos

Para rodar um teste específico, como `login.cy.js`, use o comando:

```bash
npx cypress run --spec cypress/e2e/tests/login.cy.js
```

## Contato

Para dúvidas ou mais informações, entre em contato pelo e-mail [quintans.kellen@gmail.com](mailto:quintans.kellen@gmail.com).

