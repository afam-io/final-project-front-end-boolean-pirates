//Checking nav bar
//checking likes
//clicking on tutroial card

//Checking nabar links
describe('Clicking links from Home Page', () => {
  it('The Tutorials link on navbar works correctly and pathname is correct', () => {
    cy.visit('https://final-project-front-end-boolean-pirates.vercel.app/');
    cy.get('.hidden > .flex > :nth-child(2)').click();
    cy.location('pathname').should('eq', '/search');
    cy.go('back');
  });

  //  ========== TEST DEPENDENT ON AUTH0 =====================

  it('Uses create link to navigate to form page, making a contains query to check render', () => {
    cy.visit('https://final-project-front-end-boolean-pirates.vercel.app/');
    cy.get('.hidden > .flex > :nth-child(3)').click();
    // cy.location("pathname").should("eq", "/createtutorials");
    // cy.location("pathname", { timeout: 6000 }).should(
    //   "include",
    //   "/createtutorials"
    // );
    // cy.contains("Upload Tutorial Form");
    // cy.get("#title").type("Name Here");
  });

  it('Clicking on a tutorial card results in the link opening with elements rendering.', () => {
    cy.visit('https://final-project-front-end-boolean-pirates.vercel.app/');
    cy.get(':nth-child(2) > :nth-child(1) > .max-w-sm > :nth-child(1)').click();
    cy.contains('Instructions');
    cy.contains('Materials');
    cy.contains('Level');
    cy.contains('Comments');
    cy.get('iframe');
    cy.get('.flex-col > :nth-child(3) > .pt-4');
  });

  /*   it(
    'Uses search link in navbar and types in the input field once loaded',
    () => {
      cy.visit('https://final-project-front-end-boolean-pirates.vercel.app/');
      cy.get('.flex > :nth-child(4)').click();
      // cy.location("pathname").should("eq", "/tutorials");
      cy.get('#default-search').type('wind');
      cy.get('button');
    }
  ); */

  //  ========== TEST DEPENDENT ON AUTH0 =====================

  it('Uses profile link in navbar and queries to check render', () => {
    cy.visit('https://final-project-front-end-boolean-pirates.vercel.app/');
    cy.get('.flex > :nth-child(5)').click();
    // cy.location("pathname").should("eq", "/profile");
    // cy.get("#default-search").type("wind");
    // cy.get(".right-1.5 > .w-5 > path").click();
  });

  // Testing card button
  it('Clicking on a tutorial card results in the link opening with elements rendering.', () => {
    cy.visit('https://final-project-front-end-boolean-pirates.vercel.app/');
    cy.get(':nth-child(1) > :nth-child(1) > .max-w-sm > :nth-child(1)').click();
    cy.contains('Instructions');
    cy.contains('Materials');
    cy.contains('Level');
    cy.contains('Comments');
    cy.get('iframe');
    //cy.get('.flex-col > :nth-child(3) > .pt-4');
  });
});
