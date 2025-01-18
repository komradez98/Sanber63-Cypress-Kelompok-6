import magentoPage from "./pageObject/magentoPage"
import 'cypress-xpath'; //untuk menginport xpath

// Function Oca Yordant Start
Cypress.Commands.add('loginOca', (username, password) => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/')
    cy.get('#email').type(username)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
  })
Cypress.Commands.add('autoLoginOca', (uNum) => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/')
    cy.fixture('users.json').then((users) => {
      const datauser = users[uNum];
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

// Dede
// npm install -D cypress-xpath (untuk menggunakan xpath)
Cypress.Commands.add('addToCartAndCheckout', () => {
  cy.visit('https://magento.softwaretestingboard.com')
  cy.xpath("//img[@alt='Radiant Tee']").click()
  cy.xpath("//div[@id='option-label-size-143-item-166']").click()
  cy.xpath("//div[@class='swatch-attribute color']/div[@class='swatch-attribute-options clearfix']/div[1]").click()
  cy.xpath("//span[.='Add to Cart']").click()
  cy.wait(2000)
  cy.xpath("//div[@class='minicart-wrapper']/a[@href='https://magento.softwaretestingboard.com/checkout/cart/']")
    .should('be.visible')
    .click({force: true})
  cy.xpath("//button[@id='top-cart-btn-checkout']").click()
  cy.wait(5000)
})

Cypress.Commands.add('shippingField', () => {
  cy.addToCartAndCheckout()
      cy.xpath("//div[@class='field required']//input[@id='customer-email']")
        .type('sanberkel6@gmail.com')
        .click()
      cy.wait(2000)
      cy.xpath("//input[@id='customer-password']")
        .type('sanberkel6')
    cy.xpath("//span[.='Login']").click()  
      cy.xpath("//input[@name='firstname']")
        .type('Jhon')
      cy.xpath("//input[@name='lastname']")
        .type('Doe')
      cy.xpath("//input[@name='company']")
        .type('Sony Entertainment')
      cy.xpath("//fieldset[@class='field street admin__control-fields required']//div[@class='field _required']//input[@class='input-text']")
        .type('New York')
      cy.xpath("//input[@name='city']")
        .type('Bronx')
      cy.xpath("//select[@name='region_id']")
        .should('be.visible')
        .select('1')
      cy.xpath("//input[@name='postcode']")
        .type('12345-6789')
      cy.xpath("//select[@name='country_id']/option[text()='United States']").should('be.visible')
      cy.xpath("//input[@name='telephone']")
       .type('081234567891')
      cy.xpath("//td[@id='label_method_flatrate_flatrate']").click()
      cy.xpath("//span[.='Next']").click()
  cy.wait(5000)
})
// Dede End

//Fajri Annisa
Cypress.Commands.add('fillCreateAccount', (firstname, lastname, email, password) => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  cy.get('#firstname').type(firstname)
  cy.get('#lastname').type(lastname)
  cy.get('#email_address').type(email)
  cy.get('#password').type(password)
  cy.get('#password-confirmation ').type(password)

})
Cypress.Commands.add('autoFillCreateAccount', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  cy.fixture('users.json').then ((users) => {
    const datauser = users[10];
    cy.fillCreateAccount(datauser.firstname, datauser.lastname, datauser.email, datauser.password)
  })
})
Cypress.Commands.add('autoFillCreateAccount', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  cy.fixture('users.json').then ((users) => {
    const datauser = users[11];
    cy.fillCreateAccount(datauser.firstname, datauser.lastname, datauser.email, datauser.password)
  })
})
Cypress.Commands.add('autoFillCreateAccount', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  cy.fixture('users.json').then ((users) => {
    const datauser = users[12];
    cy.fillCreateAccount(datauser.firstname, datauser.lastname, datauser.email, datauser.password)
  })
})
//Annisa End




