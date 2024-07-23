describe("Handle Amazon", () => {
  it("login into the site", () => {
    cy.visit(
      "https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=678802104188&hvpos=&hvnetw=g&hvrand=11244480079090665442&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061980&hvtargid=kwd-10573980&hydadcr=14453_2371562&gad_source=1"
    )// visiting the website
    cy.url().should("include", "https://www.amazon.in/")
    cy.get("#nav-global-location-popover-link ").click({multiple: true})
    cy.wait(7000)
   /* cy.get("").click()
    cy.wait(2000)*/




  })
})
