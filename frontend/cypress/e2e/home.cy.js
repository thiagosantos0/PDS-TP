describe('Home button', () => {
  beforeEach(() => {
    // reset the database prior to every test
    cy.exec('npm run test:reset --prefix ../backend');
    cy.visit('/');
  });

  it('can register and Log in', () => {
    cy.get('[data-cy=register-btn]').click();

    cy.location('pathname').should('eq', '/auth/register');

    cy.get('[data-cy=name]')
      .find('#name')
      .type('Test User')
      .should('have.value', 'Test User');

    cy.get('[data-cy=email]')
      .find('#email')
      .type('test@email.com')
      .should('have.value', 'test@email.com');

    cy.get('[data-cy=password]')
      .find('#password')
      .type('12345678')
      .should('have.value', '12345678');

    cy.get('[data-cy=submit-btn]').click();

    cy.location('pathname').should('eq', '/auth/login');
  });
});
