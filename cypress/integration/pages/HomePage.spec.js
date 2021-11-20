




describe.skip("Instagram", () => {
  beforeEach(() => {
    cy.visit("https://instagram.com");
  });
  it("Should display Instagram page", () => {
    cy.contains("Accept All").click();
    cy.contains("Accept All").should("not.exist");
    cy.contains("username").type("devlin.duldulao@inmeta.no");
  });
});
