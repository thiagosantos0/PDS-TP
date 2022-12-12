describe('Create and Delete articles', () => {
  beforeEach(() => {
    cy.exec('npm run test:reset --prefix ../backend');
    cy.exec('npm run test:addusers --prefix ../backend');
    cy.visit('/auth/login');
    cy.get('[data-cy=email]').find('#email').type('test@email.com');
    cy.get('[data-cy=password]').find('#password').type('12345678');
    cy.get('[data-cy=submit-btn]').click();
  });

  it('can create articles', () => {
    cy.get('[data-cy=card-item]').should('have.length', 0);

    cy.get('[data-cy=add-btn]').click();

    cy.get('[data-cy=name]')
      .find('#name')
      .type('React')
      .should('have.value', 'React');

    cy.get('[data-cy=image]')
      .find('#image')
      .type(
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      )
      .should(
        'have.value',
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      );

    cy.get('[data-cy=description]')
      .find('#description')
      .type(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan sit amet lorem ac pulvinar. Proin purus massa, gravida ac orci et, lobortis porttitor ligula.',
      )
      .should(
        'have.value',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan sit amet lorem ac pulvinar. Proin purus massa, gravida ac orci et, lobortis porttitor ligula.',
      );

    cy.get('[data-cy=submit-btn]').click();

    cy.get('[data-cy=card-item]').should('have.length', 1);
  });

  it('can delete articles', () => {
    cy.exec('npm run test:addarticles --prefix ../backend');
    cy.reload();
    cy.get('[data-cy=card-item]').should('have.length', 3);
    cy.get('[data-cy=card-item-menu-btn]').first().click();
    cy.get('[data-cy=card-item-delete-btn]').first().click();
    cy.get('[data-cy=delete-modal-submit-btn]').click();
    cy.get('[data-cy=card-item]').should('have.length', 2);
  });
});
