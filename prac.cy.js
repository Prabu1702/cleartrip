describe("Handle in ticketsNew", () => {
  it(" Login into the site", () => {
    cy.visit("https://ticketnew.com/movies");
    cy.url().should("include", "https://ticketnew.com/movies");

    cy.get(
      ".MobileMovieCitySelector_topCitiesWrap__875yf > ul > :nth-child(2)"
    ).click();

    cy.get(
      ":nth-child(2) > .H5RunningMovieV2_runningMovie__5uA8A > a > .H5RunningMovieV2_imgWrapper__Tadcr > .bgImg"
    ).click();

    cy.get('[class*="cinemaDates"] .DatesMobileV2_month__bBDfN').each(
      ($date) => {
        if ($date.text().includes("Wed")) {
          cy.wrap($date).click();
        }
      }
    );
  });
});
