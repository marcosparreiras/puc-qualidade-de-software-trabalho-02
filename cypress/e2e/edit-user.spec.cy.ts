describe("Create user", () => {
  beforeEach(() => {
    cy.task("db:clear", undefined).then(() => {
      cy.visit("/");
    });
  });

  it("Should be able to edit an existent user", () => {
    const userData = {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    };
    const newEmail = "doedoe@example.com";

    cy.task("db:create", userData).then((responseData: any) => {
      cy.contains(responseData?.user?._id).click();
      cy.get("#email").click().clear().type(newEmail);
      cy.get("#oldPassword").click().type(userData.password);
      cy.get("#newPassword").click().type(userData.password);
      cy.get("button[type='submit']").click();
      cy.contains(newEmail);
    });
  });

  it("Should be able to cancel an user edit right after submiting the form", () => {
    const userData = {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    };
    const newEmail = "doedoe@example.com";

    cy.task("db:create", userData).then((responseData: any) => {
      cy.contains(responseData?.user?._id).click();
      cy.get("#email").click().clear().type(newEmail);
      cy.get("#oldPassword").click().type(userData.password);
      cy.get("#newPassword").click().type(userData.password);
      cy.get("button[type='submit']").click();
      cy.get(".MuiSnackbarContent-action > button").click();
      cy.contains(userData.email);
    });
  });
});
