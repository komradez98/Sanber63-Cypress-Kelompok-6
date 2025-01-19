describe('create an account positive', () => {
    it('successfully creates an account', () => {
    cy.autoFillCreateAccount()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.message-success').should('be.visible').and('contain', 'Thank you for registering with Main Website Store.')
  })
})
describe('create an account negative', () => {
  it.only('Failed to create account - password contains only lowercase letters', () => {
    cy.autoFillCreateAccount()
    cy.get('failedCreateAccount1')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error').should('be.visible').and('contain', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.');
  })  
  it('Failed to create account - password does not contain numbers', () => {
    cy.autoFillCreateAccount()
    cy.get('#password').clear().type('Sanbercode');
    cy.get('#password-confirmation').clear().type('Sanbercode');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error')
  })
  it('Failed to create account - password less than 8 characters', () => {
    cy.autoFillCreateAccount()
    cy.get('#password').clear().type('Sanber6');
    cy.get('#password-confirmation').clear().type('Sanber6');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error')
  })
})