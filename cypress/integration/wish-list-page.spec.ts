import { createWish } from 'cypress/models/wish';

describe('The wish list page', () => {
  it('should show the correct title', () => {
    cy.visit('/');
    cy.get('h1').contains('The big Christmas 🎅 list');
  });

  describe('add a wish form', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should add a wish to the list', () => {
      cy.enterWish(
        createWish({
          title: 'Christmas tree',
          place: 1,
          priceAmount: 25.99,
          priceCurrency: 'Euro',
        })
      );
      cy.submitWish();
      cy.get('ol[data-test-id="wish-list"]')
        .get('li:first-child')
        .should('contain.text', 'Christmas tree (€25.99)');
    });

    it('should disable the add button when the form is invalid', () => {
      cy.enterWish(
        createWish({
          place: -1, // invalid
        })
      );
      cy.submitWishButton().should('be.disabled');
    });

    it('should show a validation error when "place" is less then 0', () => {
      cy.enterWish(createWish({ place: -1 }));
      cy.wishValidationMessage().should('contain.text', 'Min value is 1');
    });
  });
});
