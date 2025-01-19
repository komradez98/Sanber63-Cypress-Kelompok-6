describe('Shopping Cart', () => {
  it('Choose Product', () => {
    cy.autoLoginOca(11)
    cy.chooseProduct1()
    cy.get('.counter-number').should('contain', '1')
  })
  it('Update Cart - Change', () => {
    cy.autoLoginOca(11)
    cy.updateCart()
    cy.get('.item-options > :nth-child(2)').should('contain', 'L')
    cy.get('.item-options > :nth-child(4)').should('contain', 'Green')
  })
  it('Update Cart - negative test 0 qty', () => {
    cy.autoLoginOca(11)
    cy.negTest1()
    cy.get('#qty-error').should('contain', 'Please enter a quantity greater than 0.')
  })
  it('Update Cart - negative test over 10k qty', () => {
    cy.autoLoginOca(11)
    cy.negTest2()
    cy.get('#qty-error').should('contain', 'The maximum you may purchase is 10000.')
  })
  it('Update Cart - remove', () => {
    cy.autoLoginOca(11)
    cy.removeCart()
    cy.get('.cart-empty > :nth-child(1)').should('contain', 'You have no items in your shopping cart.')
  })
})