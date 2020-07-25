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
            cy.log(`${json.code}`);
            debugger
        })
    });

    it('Fixture Two', () => {
        cy.fixture('users').then((user) => {
            debugger;
            cy.log(`${user[0].name}`)
        })
    });

    it('Can login with valid email and password', () => {
        cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    });
});
