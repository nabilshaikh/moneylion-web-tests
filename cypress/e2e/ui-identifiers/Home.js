/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable class-methods-use-this */
class Home {
  getCareersLink() {
    return cy.get('.footer-links-section')
      .scrollIntoView()
      .find('div > ul > li:nth-child(2) > a')
      .eq(0)
      .should('be.visible');
  }
  /** OR
   * cy.contains('Careers').scrollIntoView().should('be.visible');
   */
}

export default Home;
