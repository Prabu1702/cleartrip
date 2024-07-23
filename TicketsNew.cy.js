///<reference types="cypress" />

describe("Handle TicketsNew", () => {
  it("Login into the site", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit("https://ticketnew.com/movies");

    cy.url().should("include", "https://ticketnew.com/movies");
    cy.get(
      ".MobileMovieCitySelector_topCitiesWrap__875yf > ul > :nth-child(2)"
    ).click();
    cy.wait(3000);
    //cy.get(":nth-child(3) > .H5RunningMovieV2_runningMovie__5uA8A > a > .H5RunningMovieV2_imgWrapper__Tadcr > .bgImg").should("be.visible") .click();

    cy.get(".H5RunningMovies_gridWrapper__KuuvC :nth-child(4) .bgImg").click({
      force: true,
    });
    cy.get("#English-index-selection-dialog").click({ force: true });
    cy.get(".Button_btn__NHo2w").click();
    //cy.get('.DatesMobileV2_cinemaDatesActive__K9F_W > .DatesMobileV2_movieDateText__KWrcz').click()

    cy.get('[class*="cinemaDates"] .DatesMobileV2_month__bBDfN').each(
      ($date) => {
        if ($date.text().includes("Wed")) {
          cy.wrap($date).click();
        }
      }
    );

    cy.get(
      ":nth-child(11) > .MovieSessionsListing_col2__4GGXs > .MovieSessionsListing_timeblock__S_Z44 > .greenCol"
    ).click({ multiple: true });

    cy.wait(7000);

    // cy.get(".MovieSessionsListing_col2__4GGXs :nth-child(1)").click({multiple :true}

    cy.get(":nth-child(6) > .FixedSeating_seatL__dETyY > :nth-child(5)").each(
      ($seat) => {
        cy.wrap($seat).click();
      }
    );

    cy.screenshot("ticket");

    /*if ($time.text().includes("03:05 PM")) {
        cy.wrap($time).should('have.class', 'active').click()
        

      }
    });*/

    //cy.get('input[role="button"]').click({ force: true });
  });
});
