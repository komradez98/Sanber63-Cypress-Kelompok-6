describe('create an account', () => {
    it.only('successfully creates an account', () => {
    cy.autoFillCreateAccount()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.message-success').should('be.visible').and('contain', 'Thank you for registering with Main Website Store.')
  })
  it('Failed to create account - password contains only lowercase letters', () => {
    cy.failedCreateAccount1()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error').should('be.visible').and('contain', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.');
  })  
  it('Failed to create account - password does not contain numbers', () => {
    cy.autoFillCreateAccount()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error')
  })
  it('Failed to create account - password less than 8 characters', () => {
    cy.autoFillCreateAccount()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error')
  })
})
