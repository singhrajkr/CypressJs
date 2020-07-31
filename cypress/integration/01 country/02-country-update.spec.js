/// <reference types="cypress" />

describe('Update Country Test', () => {

    before(() => {
        cy.visit('/configuration/country');
    });

    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });

    it('Can login with valid email and password', () => {
        cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    });

    it('Click on code filter Icon', () => {
        cy.get('#complex-filter-label-code-open-button').click();
    });

    it('Enter Code to search for created country', () => {
        cy.fixture('countryCode').then((json) => {
            cy.log(`${json.countryCode}`);
            cy.get('#complex-filter-search-overlay-term-input').type(json.countryCode);
            cy.wait(500)
        });
        cy.get('body').click();
    });

    it('Click edit icon to update country', () => {
        cy.get('#country-list-DELBSTDCHN-edit-mat-icon').click({ force: true });
    });

    it('Enter Comment', () => {
        cy.get('#country-editor-comments-textarea').type(`Country comments updated on ${Date.now()}`);
    });

    it('Click update button to create country', () => {
        cy.get('#country-editor-save-button').click();
    });

});
