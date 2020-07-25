
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

    it('Click code filter Icon', () => {
        cy.get('#complex-filter-label-code-open-button').click();
    });

    it('Enter Code to search created country', () => {
        cy.fixture('countryCode').then((json) => {
            cy.log(`${json.countryCode}`);
            debugger
            cy.get('#complex-filter-search-overlay-term-input').type(json.countryCode);
        });
    });

    // it('Click elsewhere to switch the context', () => {
    //     cy.get('#breadcrumbs-title').click();
    // });

    it('Click edit icon to update country', () => {
        cy.get('mat-icon[contains(@id,"edit-mat-icon")]').click({ force: true });
    });

    it('Enter Comment', () => {
        cy.get('#country-editor-comments-textarea').type(`Country comments updated ${Date.now()}`);
    });

    it('Click update button to create country', () => {
        cy.get('#country-editor-save-button').click();
    });

});
