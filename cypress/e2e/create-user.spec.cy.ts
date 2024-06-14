describe("Create user", () => {
  beforeEach(() => {
    cy.task("db:clear", undefined).then(() => {
      cy.visit("/");
    });
  });

  it("Should be able to create a new user filling in the form and then click save button", () => {
    const userData = {
      name: "Jany Doe",
      email: "janydoe@example.com",
      password: "654321",
    };

    cy.get(".RaCreateButton-root").click();
    cy.get("#name").click().type(userData.name);
    cy.get("#email").click().type(userData.email);
    cy.get("#password").click().type(userData.password);
    cy.get("button[type='submit']").click();
    cy.contains(userData.name);
    cy.contains(userData.email);
  });

  it("Should be able to create a new user filling in the form and then pressing 'ENTER' key", () => {
    const userData = {
      name: "Jany Doe",
      email: "janydoe@example.com",
      password: "654321",
    };

    cy.get(".RaCreateButton-root").click();
    cy.get("#name").click().type(userData.name);
    cy.get("#email").click().type(userData.email);
    cy.get("#password").click().type(userData.password).type("{enter}");

    cy.contains(userData.name);
    cy.contains(userData.email);
  });
});
