/* eslint-disable max-len */
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

Then('user should be able to see {string} blocks displayed next to {string}', (locationNames, locationTitle) => {
  careers.getWhereWeWorkLocationBlockGroup().children().should('have.length', 2); // two length i.e, first block (Our Team) and second block (4 location names)
  careers.getWhereWeWorkLocationFirstBlock().should('have.text', locationTitle); // first block title 'Where we work'
  careers.getWhereWeWorkLocationSecondBlock().should('have.length', 4); // second block contains 4 locations - NY, Sioux falls, Kuala Lumpur & around the globe
  const locationArray = locationNames.split(',');
  locationArray.forEach((locationName, locationIndex) => {
    careers.getWhereWeWorkLocationSecondBlock().eq(locationIndex).then((elementLocation) => {
      expect(elementLocation.text().trim()).to.eq(locationName.trim()); // verifying 4 location names on second block (i.e right block)
    });
  });
});
