/// <reference types="cypress" />
describe('Test Login Functionality suite', () => {

    before(() => {
        cy.visit('/authentication/login');
    });

    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });

    it('Fixture One', () => {
       cy.fixture('profile').then((json) => {
           cy.log(`${json.code}`)
       })
    });

    it('Fixture Two', () => {
        cy.fixture('users').then((user) => {
            cy.log(`${user[0].name}`)
        })
    });

    // it('Has correct url and page title', () => {
    //     cy.url().should('eq', 'https://shore-qa.otaliodev.com/authentication/login');
    //     cy.title().should('eq', 'Otalio - Auth');
    // });

    // it('Has correct validation message', () => {
    //     cy.get('#login-email-input').click();
    //     cy.get('#login-email-input').click();
    //     cy.get('#login-password-input').click();
    //     cy.get('#mat-error-0').should('have.text', ' Email is required');
    //     cy.get('#mat-error-0').should('have.html', ' Email is <span class="font-weight-bold">required</span>');
    // });

    // it('Can login with valid email and password', () => {
    //     cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    // });
});
