//Checking nav bar
//checking likes
//clicking on tutroial card

//Checking everything renders
describe("Visit Home Page", () => {
  it("The Tutorials link on navbar works correctly", () => {
    cy.visit("http://localhost:3000");
    cy.get(".hidden > .flex > :nth-child(2)").click();
  });
});
