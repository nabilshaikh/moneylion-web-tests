/* eslint-disable class-methods-use-this */
class Careers {
  getWhereWeWorkLocationBlockContainer() {
    return cy.get('#OurTeamWhereWeWork');
  }

  getWhereWeWorkLocationBlockGroup() {
    return this.getWhereWeWorkLocationBlockContainer()
      .find('.wp-block-columns')
      .first();
  }

  getWhereWeWorkLocationFirstBlock() {
    return this.getWhereWeWorkLocationBlockGroup()
      .children()
      .first()
      .find('.wp-block-heading');
  }

  getWhereWeWorkLocationSecondBlock() {
    return this.getWhereWeWorkLocationBlockGroup()
      .children()
      .last()
      .find('.wp-block-column');
  }
}

export default Careers;
