import { getGlobalData, setGlobalData } from './globalTempData';

// const GLOBAL_DATA = new Map();

// Cypress.Commands.add('readData', () => {
//   return require('../globalTempData.json');
// });

/**
 * @parameter email
 * @parameter password
 * cy.login(email, password)
 */
Cypress.Commands.add('login', (email, password) => {
  cy.get('#login-email-input').type(email);
  cy.get('#login-password-input').type(password);
  cy.get('#login-login-button').click();
});

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorageCache', () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorageCache', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add('clearLocalStorageCache', () => {
  localStorage.clear();
  LOCAL_STORAGE_MEMORY = {};
});

/**
 * @parameter locator
 * @parameter globalVarName
 * cy.enterUniqueCode(locator, alphaLength)
 */
Cypress.Commands.add('setAndEnterUniqueCode', (locator, globalVarName) => {
  setGlobalData(globalVarName, `${uniqueStringCode(4)}`);
  const data = getGlobalData(globalVarName);
  cy.log('GLOBAL DATA::::::::::::::::::::::::::::::', data);
  cy.get(locator).type(data);
});

/**
 * Get any global variable value populated during runtime and pass it into input element.
 * @parameter locator
 * @parameter globalVarName
 * cy.getRuntimeGlobalData(locator, globalVarName)
 */
Cypress.Commands.add('getRuntimeGlobalData', (locator, globalVarName) => {
  const data = getGlobalData(globalVarName);
  cy.log('GLOBAL DATA::::::::::::::::::::::::::::::::', data);
  cy.get(locator).type(data);
});



/**
 * @parameter locator
 * cy.getRuntimeGlobalData(locator, globalVarName)
 */
Cypress.Commands.add('enterCharISO2', (locator) => {
  cy.get(locator).type(`${randomeAlphaCode(2)}`);
});

/**
 * @parameter locator
 * cy.getRuntimeGlobalData(locator, globalVarName)
 */
Cypress.Commands.add('enterCharISO3', (locator) => {
  cy.get(locator).type(`${randomeAlphaCode(3)}`);
});


/**
 * @parameter locator
 * cy.getRuntimeGlobalData(locator, globalVarName)
 */
Cypress.Commands.add('enterNumISO2', (locator) => {
  cy.get(locator).type(`${generateRandomNum(2)}`);
});

/**
 * @parameter locator
 * cy.getRuntimeGlobalData(locator, globalVarName)
 */
Cypress.Commands.add('enterNumISO3', (locator) => {
  cy.get(locator).type(`${generateRandomNum(3)}`);
});



function uniqueStringCode(alphaLength) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  for (let i = 0; i < alphaLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  result = `${result + Date.now()}`;
  return result;
}

function generateRandomNum(length) {
  const add = 1;
  let max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.
  if (length > max) {
    return generateRandomNum(max) + generateRandomNum(length - max);
  }
  max = Math.pow(10, length + add);
  const min = max / 10; // Math.pow(10, n) basically
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return ('' + number).substring(add);
}


function randomeAlphaCode(strLength) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  for (let i = 0; i < strLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * If you are typing into a password field, the password input is masked automatically within your application. 
 * But .type() automatically logs any typed content into the Test Runner’s Command Log.
 * You may want to mask some values passed to the .type() command so that sensitive data does not display in screenshots or videos of your test run.
 *  This example overwrites the .type() command to allow you to mask sensitive data in the Test Runner’s Command Log.
 */
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false;
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    });
  }

  return originalFn(element, text, options)
});


/**
 * Create a user
 * cy.createUser({id: 123,name: 'Jane Lane'})
 */
Cypress.Commands.add('createUser', (user) => {
  cy.request({
    method: 'POST',
    url: 'https://www.example.com/tokens',
    body: {
      email: 'admin_username',
      password: 'admin_password'
    }
  }).then((resp) => {
    cy.request({
      method: 'POST',
      url: 'https://www.example.com/users',
      headers: ({ Authorization: 'Bearer ' + resp.body.token }),
      body: user
    });
  });
});

/**
 * Log out command using UI
 * cy.logoutUI()
 */
Cypress.Commands.add('logoutUI', () => {
  cy.contains('Login').should('not.exist');
  cy.get('.avatar').click();
  cy.contains('Logout').click();
});

/**
 * Log out command using localStorage
 * cy.logoutLT()
 */
Cypress.Commands.add('logoutLT', () => {
  cy.window().its('localStorage')
    .invoke('removeItem', 'session');

  cy.visit('/login');
});



/**
 * cy.checkToken('abc123')
 */
Cypress.Commands.add('checkToken', (token) => {
  cy.window()
    .its('localStorage.token')
    .should('eq', token);
});

/**
* cy.clickLink('Buy Now')
*/
Cypress.Commands.add('clickLink', (label) => {
  cy.get('a').contains(label).click();
});


/**
 * cy.downloadFile('https://path_to_file.pdf', 'mydownloads', 'demo.pdf')
 */
Cypress.Commands.add('downloadFile', (url, directory, fileName) => {
  return cy.getCookies().then((cookies) => {
    return cy.task('downloadFile', {
      url,
      directory,
      cookies,
      fileName,
    });
  });
});

/**
 * cy.setSessionStorage('token', 'abc123')
 */
Cypress.Commands.add('getSessionStorage', (key) => {
  cy.window().then((window) => window.sessionStorage.getItem(key));
});

/**
* cy.getSessionStorage('token').should('eq', 'abc123')
*/
Cypress.Commands.add('setSessionStorage', (key, value) => {
  cy.window().then((window) => {
    window.sessionStorage.setItem(key, value);
  });
});

Cypress.Commands.overwrite('log', (subject, message) => cy.task('log', message));
