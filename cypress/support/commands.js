import magentoPage from "./pageObject/magentoPage"

// Function Oca Yordant Start
Cypress.Commands.add('loginOca', (username, password) => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/')
    cy.get('#email').type(username)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
  })
Cypress.Commands.add('autoLoginOca', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/')
    cy.fixture('users.json').then((users) => {
      const datauser = users[0];
    cy.loginOca(datauser.username, datauser.password)
    });   
  })
Cypress.Commands.add('chooseProduct1', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get(':nth-child(4) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
    cy.url().should('include', '/hero-hoodie.html')
    cy.get('#option-label-size-143-item-170').click()
    cy.get('#option-label-color-93-item-52').click()
    cy.get(magentoPage.addToCartBtn).click()
    })
Cypress.Commands.add('removeCart', () => {
    cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
    cy.get('.action-delete').click()
})
Cypress.Commands.add('updateCart', () => {
  cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
    cy.get('.action-edit').click()
    cy.get('#option-label-size-143-item-169').click()
    cy.get('#option-label-color-93-item-53').click()
    cy.get(magentoPage.updateCartBtn).click()
})
Cypress.Commands.add('negTest1', () => {
  cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
    cy.get('.action-edit').click()
    cy.get('#option-label-size-143-item-170').click()
    cy.get('#option-label-color-93-item-52').click()
    cy.get('#qty').clear().type('0')
    cy.get(magentoPage.updateCartBtn).click()
  })
  Cypress.Commands.add('negTest2', () => {
    cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
    cy.get('.action-edit').click()
    cy.get('#option-label-size-143-item-170').click()
    cy.get('#option-label-color-93-item-52').click()
    cy.get('#qty').clear().type('10001')
    cy.get(magentoPage.updateCartBtn).click()
    })
// Oca end