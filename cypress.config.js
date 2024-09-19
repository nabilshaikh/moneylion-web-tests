/* eslint-disable no-param-reassign */
/* eslint-disable no-dupe-keys */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');
const { allureCypress } = require('allure-cypress/reporter');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', browserify.default(config));
  allureCypress(on, config);
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/*.{feature,cy.js}',
    baseUrl: 'https://www.moneylion.com',
    chromeWebSecurity: false,
    pageLoadTimeout: 100000,
    defaultCommandTimeout: 10000,
    video: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    retries: 1,
    env: {
      apiBaseUrl: 'https://reqres.in',
    },
  },
});
