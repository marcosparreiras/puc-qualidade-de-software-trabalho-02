describe("Create user", () => {
  beforeEach(() => {
    cy.task("db:clear", undefined).then(() => {
      cy.visit("/");
    });
  });

  it("Should be able remove an existent user", () => {
    const userData = {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    };

    cy.task("db:create", userData).then((responseData: any) => {
      cy.contains(responseData?.user?._id).click();
      cy.get(".RaToolbar-defaultToolbar > .MuiButton-text").click();
      cy.get(".MuiTypography-h4").should("contain", "No User yet.");
    });
  });

  it("Should be able to cancel a user remove right after submit", () => {
    const userData = {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    };

    cy.task("db:create", userData).then((responseData: any) => {
      cy.contains(responseData?.user?._id).click();
      cy.get(".RaToolbar-defaultToolbar > .MuiButton-text").click();
      cy.get(".MuiSnackbarContent-action > button").click();
      cy.contains(responseData?.user?._id);
    });
  });
});
