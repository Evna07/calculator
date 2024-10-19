describe("Button and screen test", () => {
  it("Presses the number 5 button", () => {
    cy.visit("http://localhost:3000");
    cy.get('[class*="screen"]').should("contain", "0");
    cy.contains("button", "5").click();

    cy.get('[class*="screen"]').should("contain", "5");
  });
});

// describe("Addition test - Success", () => {
//   it("Adds the number 5 & 5", () => {
//     cy.visit("http://localhost:3000");
//     cy.get('[class*="screen"]').should("contain", "0");
//     cy.contains("button", "5").click();
//     cy.get("button")
//       .filter((index, button) => {
//         return Cypress.$(button).text() === "+";
//       })
//       .click();
//     cy.contains("button", "5").click();
//     cy.contains("button", "=").click();

//     cy.get('[class*="screen"]').should("contain", "10");
//   });
// });

// describe("Addition test - Fail", () => {
//   it("Adds the number 5 & 6", () => {
//     cy.visit("http://localhost:3000");
//     cy.get('[class*="screen"]').should("contain", "0");
//     cy.contains("button", "5").click();
//     cy.get("button")
//       .filter((index, button) => {
//         return Cypress.$(button).text() === "+";
//       })
//       .click();
//     cy.contains("button", "5").click();
//     cy.contains("button", "=").click();

//     cy.get('[class*="screen"]').should("contain", "10");
//   });
// });
