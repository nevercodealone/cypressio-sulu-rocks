import {adminPage, loginPage, renameMedia} from '../../support/pages';

describe('Change media name', () => {
  beforeEach(() => {
    loginPage.visit();
    cy.intercept('/admin/login').as('login');
    loginPage.doLoginAsAdmin();
    cy.wait('@login');
    cy.getCookie('SULUSESSID').should('exist');
  });

  it('Navigate to media page, find media name field and set new name', () => {
    adminPage.visit('/admin/#/collections/en');
    cy.get('.masonry--AWozSpqC-B > li:first .media-card--D92EE5mvsd > .media--ejbY2jJ4HC > .cover--raBSTujlbG > .su-pen').click();
    renameMedia.EditField.click();
    renameMedia.EditField.clear();
    renameMedia.EditField.type('Wolfsrudel.jpg');
    renameMedia.EditField.clear();
    renameMedia.EditField.type('Wolf.jpg');
    cy.get('.su-save').click();
    cy.wait(500);
    adminPage.visit('/admin/#/collections/en');
  });
  
});
