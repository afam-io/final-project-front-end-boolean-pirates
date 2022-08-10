//Checking if the card renders properly
describe("Specific tutorial card", () => {
  it("Checking if the tutorial card renders correctly when selected", () => {
    cy.visit(
      "localhost:3000/tutorials"
    );
    cy.get(":nth-child(1) > :nth-child(1) > .max-w-sm > :nth-child(1)").click();
  });

  //Checking if the iframe renders
  it("Checking if the specific tutorial card contains an iframe", () => {
    cy.wait(1000).get("iframe");
  });

  //TODO - USE THE NAME GIVEN TO THE BUTTON IN THE COMPONENT
  //Checking if the comment form works
  it("Checking if the specific tutorial card's comment form works", () => {
    cy.get(".bg-gray-100").type("Great tutorial").wait(10000).click(".-mr-1 > .bg-green-backgroundtext");
    cy.get(".bg-gray-100").should("have.value", "Great tutorial");
  });

  //Checking if the like button works
  it("Checking if the specific tutorial card's like button works", () => {
    // cy.wait(5000).click(".pt-1 > svg > path")
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2)').contains("3 Likes");
  });
});
