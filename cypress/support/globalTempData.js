
const GLOBAL_DATA = [];

function getGlobalData(globalVarName) {
    cy.log('Reading data::::::::::::::::::::', globalVarName);
    // let data = require('cypress/support/temp.json');
    // if (data) { 
    return GLOBAL_DATA[`${globalVarName}`];
    // }
}


function setGlobalData(globalVarName, value) {
    cy.log(`Setting Data:::::::::::::::: ${globalVarName} :::::::::: ${value}`);
    GLOBAL_DATA.push({ globalVarName: value });
    cy.writeFile(`cypress/fixtures/${globalVarName}.json`, `{${globalVarName} : ${value}}`, { encoding: 'utf-8' });
}

export {
    getGlobalData,
    setGlobalData
};


