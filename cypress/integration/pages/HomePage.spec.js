it("Should display Instagram page", () => {
  cy.visit("https://www.instagram.com/");
  cy.contains("Accept All").click();
  cy.contains("Accept All").should("not.exist");
  cy.contains("username").type("devlin.duldulao@inmeta.no");
});
