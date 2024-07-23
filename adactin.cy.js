describe("Handle adactin ", () => {
  it("Login into the website", () => {
    cy.visit("https://adactinhotelapp.com/");
    cy.get(".logo").screenshot("adactin");
    cy.get('input[type="text"]').type("jivita04");
    cy.get(".login_input").eq(1).type("123456");
    cy.wait(7000);
    cy.get("#login").click();
    cy.url().should("include", "https://adactinhotelapp.com/SearchHotel.php");
    cy.get("#location").select("London").should("have.value", "London");
    cy.wait(7000);
    cy.get("#hotels")
      .select("Hotel Sunshine")
      .should("have.value", "Hotel Sunshine");
    cy.get("#room_type").select("Deluxe").should("have.value", "Deluxe");
    cy.get("#room_nos").select("1 - One");
    cy.get("#datepick_in").type("30/11/2024");
    cy.get("#datepick_out").type("01/12/2024");
    cy.get("#adult_room").select("2 - Two");
    cy.get("#child_room").select("2 - Two");
    cy.wait(7000);
    cy.get("#Submit").click();
    cy.url().should("include", "https://adactinhotelapp.com/SelectHotel.php");
    cy.get("#radiobutton_0").click();
    cy.get("#continue").click();

    //cy.url().should('include', 'https://adactinhotelapp.com/BookHotel.php').screenshot("booking")

    cy.get('[href="Logout.php"]').click();
  });
});
