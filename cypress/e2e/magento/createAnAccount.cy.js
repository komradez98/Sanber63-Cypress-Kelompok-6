const { visible } = require("ansi-colors")

describe('create an account positive', () => {
  it('successfully creates an account', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('Annisa')
    cy.get('#lastname').type('Aji')
    cy.get('#email_address').type('Annisa@gmail.com')
    cy.get('#password').type('Annisafaj4')
    cy.get('#password-confirmation ').type('Annisafaj4')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.message-success').should('be.visible')
    
    
  })
})
describe('create an account negative', () => {
  it('failed created same account', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('Sanber')
    cy.get('#lastname').type('Kel6')
    cy.get('#email_address').type('sanberkel6@gmail.com')
    cy.get('#password').type('Sanberkel6')
    cy.get('#password-confirmation ').type('Sanberkel6')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.message-error')
     
  })  
  it('failed created account invalid pass', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('Sanber')
    cy.get('#lastname').type('Kel6')
    cy.get('#email_address').type('sanberkel6@gmail.com')
    cy.get('#password').type('sanberkel6')
    cy.get('#password-confirmation ').type('sanberkel6')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error')
    
     
  })
})