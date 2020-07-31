/// <reference types="cypress" />
describe('Test Login Functionality suite', () => {

    before(() => {
        // cy.clock()
        cy.visit('/authentication/login');
        // cy.tick(1000)
    });

    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });

    it('Fixture Test One', () => {
        cy.fixture('profile').then((json) => {
            cy.log(`${json.code}`);
            debugger
        })
    });

    it('Fixture Test Two', () => {
        cy.fixture('users').then((user) => {
            debugger;
            cy.log(`${user[0].name}`)
        })
    });

    it('Can login with valid email and password', () => {
        cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    });
});
