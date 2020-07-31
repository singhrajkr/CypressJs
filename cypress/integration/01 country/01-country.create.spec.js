/// <reference types="cypress" />
describe('Create Country Test', () => {

    before(() => {
        // cy.restoreLocalStorageCache()
        cy.visit('/configuration/country');
        cy.log(`LOGGGGGGGGGGGSSSSSSS`);
    });

    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });

    after(() => {
        // cy.saveLocalStorageCache(); 
        // cy.get('#hierarchy-tree-view-card-item-SHIP-8 > :nth-child(3)')
    });

    it('Can login with valid email and password', () => {
        cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    });

    it('Has correct url and page title', () => {
        cy.url().should('include', '/configuration/country');
        cy.title().should('eq', 'Otalio - Setup Service');
    });

    // it('Click on code filter Icon', () => {
    //     cy.get('#complex-filter-label-code-open-button').click();
    // });

    // it('Enter Code to search created country', () => {
    //     cy.fixture('countryCode').then((json) => {
    //         cy.log(`${json.countryCode}`);
    //         cy.get('#complex-filter-search-overlay-term-input').type(json.countryCode);
    //         cy.wait(500)
    //     });
    //     cy.get('body').click();
    // });

    // it('Click delete icon to delete country', () => {
    //     // cy.get('mat-icon[contains(@id,"delete-mat-icon")]');
    //     cy.get('#country-list-DELBSTDCHN-delete-mat-icon').then(ele => {
    //         cy.log(ele)
    //         if (ele.length === 1) {
    //             ele.click();
    //             cy.get('#delete-confirmation-dialog-delete-button').click();
    //             cy.contains('Record deleted successfully.')
    //         }
    //     })
    // });

    it('Click on Add Country Icon', () => {
        cy.get('#country-list-add-mat-icon').click();
    });

    it('Enter Code', () => {
        // cy.enterUniqueCode('#country-editor-code-input', 'countryCode', true);
        cy.fixture('countryCode').then((json) => {
            cy.log(`${json.countryCode}`);
            debugger
            cy.get('#country-editor-code-input').type(json.countryCode);
        })
    });

    it('Enter Description', () => {
        cy.get('#description-en-input').type('China');
        // cy.fixture('countryCode').then((json) => {
        //     cy.log(`${json.countryCode}`);
        //     debugger
        //     cy.get('#description-en-input').type(json.countryCode);
        // })
    });

    it('Enter Nationality', () => {
        cy.get('#nationality-en-input').type('Chinese');
    });

    it('Enter ISO3 Char Code', () => {
        // cy.enterCharISO3('input[id="country-editor-iso-code-(3-char)-input"]');
        cy.get('input[id="country-editor-iso-code-(3-char)-input"]').type('CHN')
    });

    it('Enter ISO2 Char Code', () => {
        // cy.enterCharISO2('input[id="country-editor-iso-code-(2-char)-input"]');
        cy.get('input[id="country-editor-iso-code-(2-char)-input"]').type('CI')
    });

    it('Enter ISO3 Numeric Code', () => {
        // cy.enterNumISO3('input[id="country-editor-iso-code-(3-numeric)-input"]');
        cy.get('input[id="country-editor-iso-code-(3-numeric)-input"]').type('111')
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
        cy.contains('Record created successfully');
    });

});
