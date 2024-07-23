
///<reference types="cypress" />
describe('ex',()=>{


    Cypress.on('uncaught:exception' ,(err,runnable)=>{
        //returning false here prevents Cypress from
        //failing the test


        return false
    })

    it('pass',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.on('window:before:load',(win)=>{
            //override the open function

            cy.stub(win,'open').callsFake((url)=>{

                win.location.href=url
            })
        })


        cy.get('#openwindow').click()



    })
})