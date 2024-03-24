describe('Formulário de Contato', () => {
  beforeEach(() => {
      cy.visit('http://localhost/formEtest/');
  });

  it('Deve preencher e enviar o formulário com sucesso', () => {
      const nome = 'John Doe';
      const email = 'johndoe@example.com';
      const mensagem = 'Esta é uma mensagem de teste';

      cy.get('#name').type(nome);
      cy.get('#email').type(email);
      cy.get('#message').type(mensagem);
      cy.get('form').submit();

      cy.contains('Formulario enviado com sucesso! Nome: John Doe, Email: johndoe@example.com, Message: Esta é uma mensagem de teste').should('be.visible');
  });
});