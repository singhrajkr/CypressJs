describe('Create Country Test', () => {

    before(() => {
        cy.visit('/configuration/country');
        cy.log(`LOGGGGGGGGGGGSSSSSSS`);
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

    it('Has correct url and page title', () => {
        cy.url().should('include', '/configuration/country');
        cy.title().should('eq', 'Otalio - Setup Service');
    });

    it('Click on Add Country Icon', () => {
        cy.get('#country-list-add-mat-icon').click();
    });

    it('Enter Code', () => {
        cy.enterUniqueCode('#country-editor-code-input', 'countryCode', true);
    });

    it('Enter Description', () => {
        cy.fixture('countryCode').then((json) => {
            cy.log(`${json.countryCode}`);
            debugger
            cy.get('#description-en-input').type(json.countryCode);
        })
    });

    it('Enter Nationality', () => {
        cy.get('#nationality-en-input').type('INDIAN');
    });

    it('Enter ISO3 Char Code', () => {
        cy.enterCharISO3('input[id="country-editor-iso-code-(3-char)-input"]');
    });

    it('Enter ISO2 Char Code', () => {
        cy.enterCharISO2('input[id="country-editor-iso-code-(2-char)-input"]');
    });

    it('Enter ISO3 Numeric Code', () => {
        cy.enterNumISO3('input[id="country-editor-iso-code-(3-numeric)-input"]');
    });

    it('Enter Comment', () => {
        cy.fixture('countryCode').then((json) => {
            cy.log(`${json.countryCode}`);
            debugger
            cy.get('#country-editor-comments-textarea').type(json.countryCode + '  Comments');
        });
    });

    it('Click Save button to create country', () => {
        cy.get('#country-editor-save-button').click();
        cy.wait(5000)
    });

});
