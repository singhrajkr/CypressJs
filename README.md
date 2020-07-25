## Pre-requisites to this course include:

Node.js: https://nodejs.org/en/download/
Visual Studio Code: https://code.visualstudio.com/download

## Pre-Installation Directions

1. Be sure to have Node and git installed.

2. clone this repository with 
```
```
3. Install dependencies by running the following command in terminal from the root directory of this project where package.json is present.
``` 
npm install
```
4. In terminal run the following command from the root directory for the repo:
```
npm run test
``` 
8. In terminal run the following command to run in GUI mode.
```
npx cypress open
```
A cypress window should open. If it does you are good.

## Backup Scripts
```
"delete:reports" : "del /f /s /q cypress\\reports 1>nul",
"remove:reports": "rd /s /q cypress\\reports",
"make:directories": "mkdir cypress\\reports && mkdir cypress\\reports\\mochareports && mkdir cypress\\archive",
"pretest": "npm run delete:reports || npm run clean:reports || npm run make:directories",
"scripts": "cypress run",
"combine-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochareports/report.json",
"generate-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports",
"archive-report" : "xcopy /s /i /y cypress\\reports\\mochareports cypress\\archive\\%date:/=%-%time:~0,2%.%time:~3,2%.%time:~6,2%",
"posttest": "npm run combine-reports && npm run generate-report && npm run archive-report",
"test" : "npm run scripts || npm run posttest"
// "test": "open cypress run",

```
## Fixture Files
Fixtures are used as external pieces of static data that can be used by your tests.
Fixture files are located in cypress/fixtures by default, but can be configured to another directory.


## cypress.env.json
Conflicting values will override values from your configuration file (cypress.json by default) and cypress.env.json files.
This will override the default environment values from cypress.json
So, This file can be used to override the default environment values (like QA) with QA-INIT OR Stage.
{
  "host": "shore-stage.otalio-dev.com",
  "api_server": "http://shore-stage.otalio-dev.com/api/v1/swagger/"
}

## Usage of cypress.env.json From test file
Cypress.env()             // {"host": "shore-stage.otalio-dev.com","api_server": "http://shore-stage.otalio-dev.com/api/v1/swagger/"}
Cypress.env('host')       // 'shore-stage.otalio-dev.com'
Cypress.env('api_server') // 'http://shore-stage.otalio-dev.com/api/v1/swagger/'


## Support file
By default Cypress will automatically include the support file cypress/support/index.js. This file runs before every single spec file. We do this purely as a convenience mechanism so you don’t have to import this file in every single one of your spec files.

 Keep in mind, when clicking “Run all specs” after cypress open, the code in the support file is executed once before all spec files,
 instead of once before each spec file. See Execution for more details.


## Selector Playground
The Selector Playground is an interactive feature that helps you:

Determine a unique selector for an element.
See what elements match a given selector.
See what element matches a string of text.

## Uniqueness
Cypress will automatically calculate a unique selector to use targeted element by running through a series of selector strategies.

By default Cypress will favor:

data-cy
data-test
data-testid
id
class
tag
attributes
nth-child
This is configurable
Cypress allows you to control how a selector is determined.

Use the Cypress.SelectorPlayground API to control the selectors you want returned.

## Best Practices
You may find yourself struggling to write good selectors because:

Your application uses dynamic ID’s and class names
Your tests break whenever there are CSS or content changes
To help with these common challenges, the Selector Playground automatically prefers certain data-* attributes when determining a unique selector.

Please read our Best Practices guide on helping you target elements and prevent tests from breaking on CSS or JS changes.

## Finding Selectors
To open the Selector Playground, click the  button next to the URL at the top of the runner. Hover over elements in your app to preview a unique selector for that element in the tooltip.

Opening selector playground and hovering over elements
Click on the element and its selector will appear at the top. From there, you can copy it to your clipboard () or print it to the console ().

Clicking an element, copying its selector to clipboard, printing it to the console
Running Experiments
The box at the top that displays the selector is also a text input.

## Editing a Selector
When you edit the selector, it will show you how many elements match and highlight those elements in your app.

Type a selector to see what elements it matches
Switching to Contains
You can also experiment with what cy.contains() would yield given a string of text. Click on cy.get and switch to cy.contains.

Type in text to see which element it matches. Note that cy.contains() only yields the first element that matches the text, even if multiple elements on the page contain the text.

## Experiment with cy.contains
Disabling Highlights
If you would like to interact with your app while the Selector Playground is open, the element highlighting might get in the way. Toggling the highlighting off will allow you to interact with your app more easily.

Turn off highlighting
