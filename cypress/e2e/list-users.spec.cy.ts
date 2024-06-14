describe("List users", () => {
  beforeEach(() => {
    cy.task("db:clear", undefined).then(() => {
      cy.visit("/");
    });
  });

  it("Should show a 'No User yet.' message when users database is clear (Zero users records)", () => {
    cy.get(".MuiTypography-h4").should("contain", "No User yet.");
  });

  it("Should validate that a user is being listed", () => {
    const userData = {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    };
    cy.task("db:create", userData).then((responseData: any) => {
      cy.contains(userData.name);
      cy.contains(userData.email);
      cy.contains(responseData?.user?._id);
    });
  });
});
