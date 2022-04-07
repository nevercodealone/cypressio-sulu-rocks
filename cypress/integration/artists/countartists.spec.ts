import BasePage from '../../support/pages/base.page';

describe('Count the number of artist on the artist page', () => {
    beforeEach(function ()  {
        cy.fixture('artist-count.json').then((ArtistCounter) => {
            this.ArtistCounter = ArtistCounter;
        });
    });

    context('EN: artist page', () => {

        it('Load page', () => {
            cy.visit(`${Cypress.env('URL')}/en/artists`);
        });

        it('Count and compare with fixture data', function(){
            expect(this.ArtistCounter.artistsCount.en).to.exist;
            cy.get('.card').should('have.length', this.ArtistCounter.artistsCount.en).then(_cards=>{
                cy.log('Succesfully counted and compared', _cards.length);
            });
        });
    });

    context('DE: Musiker Seite', () => {
        it('Load page', () => {
            cy.visit(`${Cypress.env('URL')}/de/musiker`);
        });

        it('Count DE Artists on page and compare with fixture data', function(){
            expect(this.ArtistCounter.artistsCount.de).to.exist;
            cy.get('.card').should('have.length', this.ArtistCounter.artistsCount.de).then(_cards=>{
                cy.log('Succesfully counted and compared', _cards.length);
            });
        });
    });

});