/// <reference types="cypress" />

describe('service worker', () => {
  it('should add a key to a header', () => {
    cy.visit('localhost:5000');

    cy.intercept('https://www.reddit.com/r/catsareliquid.json', {
      fixture: 'catsareliquid.json',
    }).as('catsAreLiquid');

    cy.get('button').click();

    cy.wait('@catsAreLiquid');
    cy.get('@catsAreLiquid')
      .its('request.headers')
      .its('x-cat-header')
      .should('contain', 'meow');
  });
});
