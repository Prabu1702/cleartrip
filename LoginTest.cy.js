describe("Login Test", () => {
  it("Login Test", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");

    cy.url().should(
      "include",
      "https://practicetestautomation.com/practice-test-login/"
    );

    cy.get("#username").type("student");

    cy.get("#password").type("Password123");

    cy.get("#submit").click();

    cy.url().should(
      "include",
      "https://practicetestautomation.com/logged-in-successfully/"
    );

    cy.get("p strong").should(
      "have.text",
      "Congratulations student. You successfully logged in!"
    );

    cy.get(".wp-block-button__link").should("be.visible").click();

    //Negative Username

    cy.get("#username").type("stu");

    cy.get("#password").type("Password123");

    cy.get("#submit").click();

    cy.wait(5000);

    cy.get("#error").should("be.visible");

    //negative password

    cy.get("#username").type("student");

    cy.get("#password").clear;

    cy.get("#submit").click();

    cy.wait(5000);

    cy.get("#error").should("be.visible");
  });
});
