Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Testing  routes", () => {
  it("should successfully load the speakers", () => {
    cy.visit("http://localhost:3000/");
    cy.get(`[data-test-id='success-button']`).click();
    cy.wait(3500);
    cy.contains("Jack Dorsey");
  });

  it("should fail to load the speakers", () => {
    cy.visit("http://localhost:3000/");
    cy.get(`[data-test-id='broken-button']`).click();
    cy.wait(3500);
    cy.contains("Failed to load");
  });
});
