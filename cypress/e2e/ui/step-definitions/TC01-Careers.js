/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable no-useless-escape */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress"/>
import {
  Given, When, Then, Before,
} from '@badeball/cypress-cucumber-preprocessor';
import Home from '../../ui-identifiers/Home';
import Careers from '../../ui-identifiers/Careers';

const home = new Home();
const careers = new Careers();

Before(() => {
  cy.intercept('https://www.moneylion.com/careers/?_rsc=18joi').as('careers');
});

Given('new customer visits {string} page', (pageName) => {
  cy.visit(pageName);
});

When("user clicks on 'Careers' present on the page footer", () => {
  home.getCareersLink().click({ force: true });
});

Then("user should be redirected to the MoneyLion's {string} page successfully", (pageName) => {
  cy.url().should('contain', pageName);
});

Then('user should be able to see {string} blocks displayed next to {string} on {string}', (locationNames, locationTitle) => {
  careers.getHeadquarterLocationBlock().should('have.length', 2);
  careers.getFirstHeadquarterLocationBlockTitle().should('have.text', locationTitle);
  careers.getSecondHeadquarterLocationBlock().should('have.length', 4);
  const locationArray = locationNames.split(',');
  locationArray.forEach((locationName, locationIndex) => {
    careers.getSecondHeadquarterLocationBlock().eq(locationIndex).should('have.text', locationName.trim());
  });
});
