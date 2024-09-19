/* eslint-disable class-methods-use-this */
class Careers {
  getHeadquarterLocationBlock() {
    return cy.get('#OurTeamWhereWeWork > .wp-block-group__inner-container')
      .find('.wp-block-group__inner-container');
  }

  getFirstHeadquarterLocationBlock() {
    return cy.get('#OurTeamWhereWeWork > .wp-block-group__inner-container')
      .find('.wp-block-group__inner-container')
      .first();
  }

  getFirstHeadquarterLocationBlockTitle() {
    return cy.get('#OurTeamWhereWeWork > .wp-block-group__inner-container')
      .find('.wp-block-group__inner-container')
      .first()
      .find('.wp-block-heading');
  }

  getSecondHeadquarterLocationBlock() {
    return cy.get('#OurTeamWhereWeWork > .wp-block-group__inner-container')
      .find('.wp-block-group__inner-container')
      .last()
      .find('.wp-element-caption');
  }
}

export default Careers;
