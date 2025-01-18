const { visible } = require("ansi-colors")

describe('create an account positive', () => {
    it('successfully creates an account', () => {
    cy.autoFillCreateAccount()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.message-success').should('be.visible')
        
  })
})
describe('create an account negative', () => {
  it('failed created same account', () => {
    cy.autoFillCreateAccount()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.message-error').should('be.visible')
     
  })  
  it('failed created account invalid pass', () => {
    cy.autoFillCreateAccount()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error')
    
     
  })
})