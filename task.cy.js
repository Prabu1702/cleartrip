///<reference types="cypress" />

describe("ProtoCommerce", () => {
  let userData;
  before(()=>{
    cy.fixture('example').then((testData)=>{
      userData=testData
    })
  })
  it("enter the credentials", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.url().should(
      "include",
      "https://rahulshettyacademy.com/angularpractice/"
    );
    cy.get("form.ng-untouched > :nth-child(1)").type(userData.username);
    cy.get("form.ng-untouched > :nth-child(2)").type(userData.userpass);
    cy.get("#exampleInputPassword1").type(userData.password);
    cy.pause()
    cy.get("#exampleCheck1").click();
    cy.get("#exampleFormControlSelect1").select("Male");
    cy.get("#inlineRadio1").click();
    cy.get(":nth-child(8) .form-control ").type("1998-08-01");
    cy.get(".btn").click({ multiple: true });
    cy.wait(2000)
    cy.get(":nth-child(2) .nav-link ").click({ multiple: true });
    cy.get("app-card .card").each(($mobiles) => {
      if ($mobiles.text().includes("iphone")) {
        cy.wrap($mobiles).find("button").click();
      }
      if ($mobiles.text().includes("Samsung")) {
        cy.wrap($mobiles).find("button").click();
      }
    })

    cy.get('[class*="nav-link btn btn-primary"] ').should("be.visible").click();
    var sum = 0
    cy.get(" tr td:nth-child(4) strong")
      .each(($price) => {
        var initial = $price.text();
        var split = initial.split(" ")
        var value = split[1].trim("")
        sum = parseInt(sum) + parseInt(value);

      })
      .then(() => {
        cy.log(sum)
        var rev = "₹. " + sum;
        expect(rev).to.equal("₹. 185000");
      })
        cy.get('.btn.btn-success').click()


         //assertion
         //cy.get('label[for="country"]').contains('Please choose your delivery location\nThen click on purchase button ').should('be.visible')
         // cy.get('.input-field > label').should('include','delivery location')
         cy.get('#country').type('in')
         cy.wait(4000)
         cy.get('.suggestions').each(($country)=>{
             if($country.text().includes('India')){
                 cy.wrap($country).click( {force: true})
             }
         }) 
         cy.get('#checkbox2').check({force: true} ).should('be.checked')
        cy.get('.btn.btn-success.btn-lg').should('be.visible').click( {force: true})
        cy.get('div>strong').should('have.text','Success!')
        cy.screenshot("ProtoCommerce")

        
        
      
  })
})

