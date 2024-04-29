///<reference types="cypress" />
import HomePage from "../PageObjectModels/Proto-HomePage"

describe('protocommerce',()=>{
    it('protocommerce test',()=>{
        const homepage = new HomePage()
        homepage.PageUrl();
        homepage.AssertUrl();
        homepage.Username();
     cy.get('[name="email"]').type('123456')
     cy.get('#exampleInputPassword1').type('78910')
     cy.get('#exampleCheck1').check().should('be.checked')
     cy.get('#exampleFormControlSelect1').select('Male').should('have.value','Male')
     cy.get('#inlineRadio1').check().should('be.checked')
     cy.get('input[type="date"]').type('1999-10-06')
     cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('includes','Success! The Form has been submitted successfully!.')
     //
     //cy.wait(4000)
     //cy.get('div a[aria-label="close"]').should('includes','Success! The Form has been submitted successfully!.')
     //
     cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
     cy.url().should('includes','https://rahulshettyacademy.com/angularpractice/shop')
    //  cy.wait(5000)
     //cy.get(':nth-child(1) > .card > .card-footer > .btn').click()//automatic
     cy.get('div button ').eq(1).click()
     cy.get('div button ').eq(2).click()
    //  cy.wait(5000)
     cy.get('[class="nav-link btn btn-primary"]').should('be.visible').click()
    //  cy.wait(5000)
     let sum=0;
     cy.get('table tr:nth-child(1) td:nth-child(4)').each(($price1)=>{
        if(($price1).text().includes('100000')){
            cy.wrap($price1).then((cellText)=>{
                const data=cellText.text()
                const iphone=parseInt(data.replace("₹. ", ""))
                cy.log(iphone)
                sum=sum+iphone
                cy.log(sum)
            })
        }
     })
     cy.get('table tr:nth-child(2) td:nth-child(4)').each(($price2)=>{
        if(($price2).text().includes('85000')){
            cy.wrap($price2).then((dataText)=>{
                const data1=dataText.text()
                const samsung=parseInt(data1.replace("₹. ", ""))
                cy.log(samsung)
                sum=sum+samsung
                cy.log(sum)
            })
        }
     })
     
  
    cy.get('.text-right').each(($price3)=>{
        if(($price3).text().includes('185000')){
            cy.wrap($price3).then((dataText1)=>{
                const Total=dataText1.text()
                const tot=parseInt(Total.replace("₹. ", ""))
                cy.log(tot)
                expect(sum).to.equal(tot)
            })
        }
     })
   
     cy.get('checkbox checkbox-primary').check().should('be.checked')
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