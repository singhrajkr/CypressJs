import { uniqueStringCode, generateRandomNum, randomeAlphaCode } from '../../support/utils';



function getISOdate() {
    const event = new Date(Date.now());
    console.log(event.toISOString());
    return event.toISOString();
}


export const POST = {
    "code": `YKT1596053147165`,
    "comments": `${uniqueStringCode(3)}`,
    "countryArea": null,
    "deleted": false,
    "enabled": true,
    "flagIconId": "a75d69623e6011e9831261ef4038f4bd",
    "iso2": "US",
    "iso3": "USA",
    "nonEligibleTaxRefundCountries": [],
    "numericIso3": "999",
    "translations": {
        "en": {
            "description": "United States",
            "nationality": "American"
        }
    },
    "when": `${getISOdate()}`,
    "who": "string"
}


export const PUT = {
    "code": `YKT1596053147165`,
    "comments": `Updated YKT1596053147165`,
    "countryArea": null,
    "deleted": false,
    "enabled": true,
    "flagIconId": "a75d69623e6011e9831261ef4038f4bd",
    "iso2": "US",
    "iso3": "USA",
    "nonEligibleTaxRefundCountries": [],
    "numericIso3": "999",
    "translations": {
        "en": {
            "description": "United States",
            "nationality": "American"
        }
    },
    "when": `${getISOdate()}`,
    "who": "string"
}