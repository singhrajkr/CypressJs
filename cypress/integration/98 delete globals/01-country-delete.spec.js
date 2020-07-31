/// <reference types="cypress" />

describe('Delete Country Test', () => {

    before(() => {
        cy.visit('/configuration/country');
        cy.wait(5000)
    });

    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });

    after(() => {
        // cy.saveLocalStorageCache();
    });

    it('Can login with valid email and password', () => {
        cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    });

    it('Click on code filter Icon', () => {
        cy.get('#complex-filter-label-code-open-button').click();
    });

    it('Enter Code to search created country', () => {
        cy.fixture('countryCode').then((json) => {
            cy.log(`${json.countryCode}`);
            cy.get('#complex-filter-search-overlay-term-input').type(json.countryCode);
            cy.wait(500)
        });
        cy.get('body').click();
    });

    it('Click delete icon to delete country', () => {
        // cy.get('mat-icon[contains(@id,"delete-mat-icon")]');
        cy.get('#country-list-DELBSTDCHN-delete-mat-icon').then(ele => {
            cy.log(ele)
            if (ele.length === 1) {
                ele.click();
                cy.get('#delete-confirmation-dialog-delete-button').click();
                cy.contains('Record deleted successfully.')
            }
        })
    });

});
