describe('Create and Delete articles', () => {
  beforeEach(() => {
    cy.exec('npm run test:reset --prefix ../backend');
    cy.exec('npm run test:addusers --prefix ../backend');
    cy.exec('npm run test:addarticles --prefix ../backend');
    cy.visit('/');
  });

  it('view all articles', () => {
    cy.get('[data-cy=visit-articles-btn]').click();

    cy.get('[data-cy=card-item]').should('have.length', 4);
    cy.get('[data-cy=card-item-user-btn]').last().click();
    cy.get('[data-cy=card-item]').should('have.length', 1);
  });
});
