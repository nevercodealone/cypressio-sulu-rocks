import BasePage from './base.page';

export class RenameMediaPage extends BasePage {
  constructor() {
    super();
    this.path = '/admin/';
  }
  get EditField() {
    return cy.get('#\\/title');
  }
}

export const renameMedia = new RenameMediaPage();
