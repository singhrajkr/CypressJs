describe('Example to use different URL', () => {
    // change environment variable for single test
    it('smoke test develop api', {
        env: {
            baseUrl: 'https://www.google.co.in'
        }
    }, () => {
        cy.request(Cypress.env('baseUrl')).its('status').should('eq', 200);
    });

    // change environment variable for single test
    it('smoke test staging api', {
        env: {
            baseUrl: 'https://www.linkedin.com'
        }
    }, () => {
        cy.request(Cypress.env('baseUrl')).its('status').should('eq', 200)
    })

    it('Accessing Country Code from Global Runtime Data', () => {
        cy.fixture('countryCode').then((json) => {
            cy.log(`${json.countryCode}`);
        });
    });

    // it('Open google search' , ()=> {
    //     cy.visit('http://www.google.co.in');
    //     cy.url().should('eq', 'https://www.google.co.in/?gws_rd=ssl')
    //     cy.get('input[class="gLFyf gsfi"]').type('Abjayon Inc.');
    //     cy.get('input[class="gNO89b"]').first().click({ multiple: false });
    //     cy.contains('Abjayon – Utilities Solutions Experts').get('h3[class="LC20lb DKV0Md"]').first().click({multiple: false})
    // cy.get('input[class="gLFyf gsfi"]').type('Abjayon Inc.');
    // cy.get('input[class="gNO89b"]').first().click({ multiple: false });
    // cy.contains('Abjayon – Utilities Solutions Experts').get('h3[class="LC20lb DKV0Md"]').first().click({multiple: false})

    // })


    // it('Open google search' , ()=> {
    //     cy.visit('/');
    //     cy.url().should('eq', 'https://www.google.co.in/?gws_rd=ssl')
    //     cy.get('input[class="gLFyf gsfi"]').type('Abjayon Inc.');
    //     cy.get('input[class="gNO89b"]').first().click({ multiple: false });
    //     cy.contains('Abjayon – Utilities Solutions Expertss').get('h3[class="LC20lb DKV0Md"]').first().click({multiple: false});
    // })

    // it('Cypress wait', () => {
    //     cy.server();
    //     cy.route('GET', '/ports').as('portPage')
    //     cy.visit('/authentication/login');
    //     cy.url().should('eq', 'https://shore-qa.otaliodev.com/authentication/login')
    //     cy.wait('@portPage') // wait for login page /authentication/login
    //         .its('response.status')
    //         .should('have.status', 304)
    // })
});


