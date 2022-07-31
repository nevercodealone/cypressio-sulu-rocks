import BasePage from './base.page';

export class StartpageClass extends BasePage {
  constructor() {
    super();
    this.path = '/de';
  }

  get articleHeadline() {
    return cy.get('.teaser__title');
  }
}

export const startpageClass = new StartpageClass();
