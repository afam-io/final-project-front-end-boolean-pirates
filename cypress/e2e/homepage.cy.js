//Checking nav bar
//checking likes
//clicking on tutroial card

//Checking everything renders
describe("Visit Home Page", () => {
  it("The nav bar has the correct text", () => {
    cy.visit("http://localhost:3000");
    cy.get("Nav").should("contain", "Tutorials");
  });
});
