describe('create an account positive', () => {
  it('succes create account', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('Sanber')
    cy.get('#lastname').type('Kel6')
    cy.get('#email_address').type('sanberkel6@gmail.com')
    cy.get('#password').type('Sanberkel6')
    cy.get('#password-confirmation ').type('Sanberkel6')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
     
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