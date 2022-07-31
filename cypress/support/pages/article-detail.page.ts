import BasePage from './base.page';

class ArticleDetailPage extends BasePage {
  get headline() {
    return cy.get('h1');
  }
}

export const articleDetailPage = new ArticleDetailPage();
