import 'cypress-wait-until';
import {adminPage, loginPage} from './pages';

Cypress.config('experimentalSessionSupport', true);

Cypress.Commands.add('login', () => {
  cy.session([], () => {
    loginPage.visit();
    loginPage.doLoginAsAdmin();
  });
  adminPage.visit();
});
