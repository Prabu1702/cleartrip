const filepath="C:\Users\sujit\OneDrive\Desktop"

cy.task('excel to Json converter',filepath),then( function(result)){
    cy.log(result)
}