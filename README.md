# 🚀 Estrutura de Testes End-to-End (E2E) com Cypress

## 🌟 Visão Geral

Bem-vindo ao repositório de testes de interface usando Cypress. Este projeto possui uma estrutura organizada baseada no modelo Page Object.

## 📁 Estrutura de Pastas

O projeto está organizado da seguinte forma:
- cypress
    -e2e
        -front
            -[cenário_de_teste]: Contém os cenários de teste.
- cypress
    -support
        -pages
            -[Paginas/Elementos]: Guarda os Page Objects (funções e elementos).


## ✅ Pré-requisitos
- [x] Node.js

## 🚀 Instalação do Projeto

#### Comando:
- [x] `npm i`
  - Instala as dependencias do projeto.
- [x] `npm run cypress:execution`
  - Executa os testes via linha de comando (CLI) e exibe os resultados.
- [x] `npm run cy:open`
  - Abre a interface do Cypress Test Runner.

## ⚡️ Execução dos Testes

#### Comandos:
- [x] `npm run cypress:execution`
  - Executa os testes via linha de comando (CLI) e exibe os resultados.
- [x] `npm run cy:open`
  - Abre a interface do Cypress Test Runner.

## 📚 Como Usar e Navegar
- [x] Adicione novos cenários de teste: 
  - Coloque-os na pasta `cypress-e2e-front-[cenário_de_teste]`.
- [x] Crie ou atualize Page Objects: 
  - Modifique ou adicione funções e elementos na pasta `cypress-support-pages-[pasta/index-element]`.

## ℹ️ Informações Adicionais
- Consulte a documentação do Cypress para mais detalhes sobre como escrever e organizar testes.
- Certifique-se de que o Node.js e outras dependências estão atualizadas para uma execução sem problemas.
