/* eslint-disable import/no-extraneous-dependencies */
import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('user visits {string} page on {string} device', (page, device) => {
  switch (device) {
    case 'mobile':
      cy.log('Opening mobile...');
      cy.viewport('iphone-6'); // {width-375 & height-667}
      cy.visit(page);
      break;
    case 'tablet':
      cy.log('Opening tablet...');
      cy.viewport('ipad-2'); // {width-768 & height-1024}
      cy.visit(page);
      break;
    case 'desktop':
      cy.log('Opening desktop...');
      cy.viewport('macbook-15'); // {width-1440 & height-900}
      cy.visit(page);
      cy.get('@careers');
      break;
    default:
      cy.log('Starting test in default viewport 1280x800');
  }
});
