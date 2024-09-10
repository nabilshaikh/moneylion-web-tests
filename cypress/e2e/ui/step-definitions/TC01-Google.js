/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress"/>

import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('User visits {string} page', (pageName) => {
  cy.visit(pageName);
});
