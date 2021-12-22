// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare namespace Cypress {
  interface Chainable<Subject = any> {
    enterWish: typeof enterWish;
    submitWish: typeof submitWish;
    submitWishButton: typeof submitWishButton;
    wishValidationMessage: typeof wishValidationMessage;
  }
}

function enterWish(wish: import('cypress/models/wish').Wish): void {
  cy.get('#titleInput').type(wish.title);
  cy.get('#placeInput').type(wish.place.toString());
  cy.get('#currencyInput').select(wish.priceCurrency);
  cy.get('#priceInput').type(wish.priceAmount.toString());
}

Cypress.Commands.add('enterWish', enterWish);

function submitWish(): void {
  cy.submitWishButton().click();
}

Cypress.Commands.add('submitWish', submitWish);

function submitWishButton(): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.get('form[data-test-id="product-form"]').get('button[type="submit"]');
}

Cypress.Commands.add('submitWishButton', submitWishButton);

function wishValidationMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.get('form[data-test-id="product-form"]').get('.invalid-feedback');
}

Cypress.Commands.add('wishValidationMessage', wishValidationMessage);
