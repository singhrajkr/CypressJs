/// <reference types="cypress" />
import { POST, PUT } from '../../fixtures/api/country'

describe('Country API CRUD Test', () => {
    let countryId;
    let isDeleted;


    it('GET Country with ISO CODE ', () => {
        // cy.request(`/core/v1/countries?search=numericIso3%3D%3D${999}`).as('countryGetRes');
        // cy.get('@countryGetRes').should( res => {
        cy.request('GET', `/core/v1/countries?search=code%3D%3D${POST.code}`).should(res => {
            const { content } = { content: [...res.body.responsePayload.content] }
            expect(content.length).to.equal(1);
            const countryRes = content[0];
            cy.log(countryRes);
            expect(res.status).to.equal(200);
            isDeleted = countryRes.deleted;
            countryId = countryRes.id;
            cy.log(countryId);
        })
    });

    it('Delete Country with ISO CODE exists', () => {
        if (!isDeleted) {
            cy.request('DELETE', `/core/v1/countries/${countryId}`).should(res => {
                expect(res.status).to.equal(200);
                if (res.status === 200) {
                    expect(res.body.message).to.equal('Record deleted successfully.')
                }
            })
        }
    });

    it('Create Country with Deleted ISO Code', () => {
        cy.request('POST', `/core/v1/countries`,  POST).should(res => {
            expect(res.body.responsePayload.code).to.equal('YKT1596053147165');
            expect(res.status).to.equal(201);
        })
    });

    it('Update created country', () => {
        cy.request('PUT', `/core/v1/countries/${countryId}`,  PUT).should(res => {
            expect(res.body.responsePayload.comments).to.equal('Updated YKT1596053147165');
            expect(res.status).to.equal(200);
        })
    });

    it('Update updated country with PATCH', () => {
        // cy.request('PUT', `/core/v1/countries/${countryId}`,  PUT).should(res => {
        //     expect(res.body.responsePayload.comments).to.equal('Updated YKT1596053147165');
        //     expect(res.status).to.equal(200);
        // })
        cy.log(countryId);
    });

   

});
