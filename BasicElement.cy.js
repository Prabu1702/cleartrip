/// <reference types="cypress" />
///

describe("Basic UI Elements Test", () => {
  it("UI elemnent automate", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.title().should("include", "Practice");

    //radio button
    cy.get('[value="radio1"]')
      .check()
      .should("be.checked")
      .and("have.value", "radio1");

    //checkbox

    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.wait(3000);

    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.wait(3000);
    cy.get('label input(type="checkbox"]').check(["option2", "option3"]);
    // Static dropdown
    cy.get("select").select("option2").should("have.value", "option3");
    // Dynamic dropdown
    cy.get("fieldset #autocomplete").type("it");
    cy.get(".ui-menu-item div").each(($sam) => {
      if ($sam.text().includes("Italy")) {
        cy.wrap($sam).click();
      }
    });
    cy.get("fieldset #autocomplete").should("have.vale", "Switzerland");

    //Alert

    cy.get("#alertbtn").click();

    cy.on("window:alert").then((AlertTxt) => {
      expect(AlertTxt).to.eq(
        "Hello , share this practice page and share your knowledge"
      );
      return true;

      cy.get('#confirmbtn').click({force:true});
    });
  });
});
