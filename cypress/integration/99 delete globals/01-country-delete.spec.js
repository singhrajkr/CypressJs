describe('Delete Country Test', () => {

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

    it('Enter Code to search created country', () => {
        cy.fixture('countryCode').then((json) => {
            cy.log(`${json.countryCode}`);
            debugger
            cy.get('#complex-filter-search-overlay-term-input').type(json.countryCode);
        });
        cy.get('#breadcrumbs-title').click();
    });

    it('Click delete icon to update country', () => {
        cy.get('mat-icon[contains(@id,"delete-mat-icon")]');
    });

    it('Click confirm delete button to delete country', () => {
        cy.get('#delete-confirmation-dialog-delete-button').click();
    });

});
