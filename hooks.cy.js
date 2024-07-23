describe('Test', function() {
    before(function() {
       // run one
       cy.log("Start")
    })
    after(function() {
       // run once
       cy.log("tear down")
    })
    beforeEach(function() {
       // run before each test
       cy.log("login")
    })
    afterEach(function() {
       // run after each test
       cy.log("logout")
    })
    it('First Test', function() {
       cy.log("First Test")
    })
    it('Second Test', function() {
       cy.log("Second Test")
    })
 })