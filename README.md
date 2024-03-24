# Formulário de Contato PHP com Testes Cypress
## Visão Geral do Projeto
Este projeto consiste em um formulário de contato desenvolvido em PHP, juntamente com testes automatizados escritos em Cypress para validar o formulário. O objetivo principal é demonstrar a criação de um formulário funcional em PHP e a automação de testes para garantir sua integridade.

### Componentes do Projeto
1. Estrutura do Projeto
O projeto está estruturado da seguinte forma:

projeto-php/ <br>
├── index.php <br>
├── submit.php <br>
└── css/ <br>
    └── style.css <br>
    
index.php: Contém o formulário de contato HTML.
submit.php: Lida com o processamento do formulário e exibe uma mensagem de confirmação.
css/style.css: Arquivo CSS para estilizar o formulário.

### 2. Desenvolvimento do Formulário de Contato
O arquivo index.php contém um formulário de contato básico com os seguintes campos:

Nome
Email
Mensagem
Ao enviar o formulário, os dados são submetidos ao arquivo submit.php via método POST. O PHP processa os dados e exibe uma mensagem de confirmação.

### 3. Testes Automatizados com Cypress
Os testes automatizados são escritos em Cypress para garantir que o formulário funcione corretamente e as validações sejam aplicadas adequadamente.

O arquivo ValidacaoFormPHP.spec.js contém os testes Cypress.
Os testes incluem casos para preencher e enviar o formulário com dados válidos, bem como casos para verificar as validações de campos vazios.
Executando o Projeto
Certifique-se de ter o servidor local (como XAMPP ou WAMP) configurado e em execução.
Coloque o diretório do projeto no diretório de hospedagem local.
Abra o navegador e navegue até http://localhost/projeto-php/index.php.
Os testes Cypress podem ser executados usando o Test Runner do Cypress.

### Conclusão
Este projeto demonstra uma implementação básica de um formulário de contato em PHP juntamente com testes automatizados escritos em Cypress. Ele pode ser expandido com mais recursos de validação, como verificação de formato de e-mail, limite de caracteres, etc.

