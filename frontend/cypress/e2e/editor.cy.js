describe('Create and Delete articles', () => {
  beforeEach(() => {
    cy.exec('npm run test:reset --prefix ../backend');
    cy.exec('npm run test:adduser --prefix ../backend');
    cy.visit('/auth/login');
    cy.get('[data-cy=email]').find('#email').type('test@email.com');
    cy.get('[data-cy=password]').find('#password').type('12345678');
    cy.get('[data-cy=submit-btn]').click();
  });

  it('can write articles', () => {
    const content =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere dui ac mi placerat, quis bibendum dui tempor. Vivamus ut orci id felis euismod semper et sed mi. Aliquam consectetur lobortis quam a suscipit. Curabitur efficitur tempus sem. Pellentesque volutpat arcu metus, eu volutpat urna tristique vel. Aliquam arcu est, convallis pharetra leo rutrum, feugiat facilisis justo. Proin ut magna nec libero posuere tempor. Ut ut nunc sit amet lacus pulvinar conguê.';
    cy.exec('npm run test:addarticles --prefix ../backend');
    cy.reload();
    cy.get('[data-cy=card-item]').should('have.length', 3);
    cy.get('[data-cy=card-item-menu-btn]').first().click();
    cy.get('[data-cy=card-item-content-btn]').first().click();

    cy.location('pathname').then((pathname) =>
      Cypress.minimatch(pathname, '/sec/**/**/editor', {
        matchBase: false,
      }),
    );

    cy.get('.ProseMirror.remirror-editor').type(content);
    cy.get('.ProseMirror.remirror-editor > p').should('have.text', content);

    cy.get('[data-cy=publish-btn]').click();
  });

  it('can read articles', () => {
    const content =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere dui ac mi placerat, quis bibendum dui tempor. Vivamus ut orci id felis euismod semper et sed mi. Aliquam consectetur lobortis quam a suscipit. Curabitur efficitur tempus sem. Pellentesque volutpat arcu metus, eu volutpat urna tristique vel. Aliquam arcu est, convallis pharetra leo rutrum, feugiat facilisis justo. Proin ut magna nec libero posuere tempor. Ut ut nunc sit amet lacus pulvinar conguê.';
    cy.exec('npm run test:addcontent --prefix ../backend');
    cy.reload();
    cy.get('[data-cy=card-item]').first().click();

    cy.location('pathname').then((pathname) =>
      Cypress.minimatch(pathname, '/**/**/reader', {
        matchBase: false,
      }),
    );

    cy.get('div.remirror-theme').find('p').should('have.text', content);
  });
});
