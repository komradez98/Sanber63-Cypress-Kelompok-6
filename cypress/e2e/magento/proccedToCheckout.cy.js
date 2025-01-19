
  describe('Alert show', () => {
    it('success alert show', () => {
     cy.addToCartAndCheckout()
      cy.xpath("//button[@class='button action continue primary']").click()
     })
  })

  describe('order summary', () => {
    it('order show detail', () => {
      cy.addToCartAndCheckout()
      cy.xpath("//div[@class='title']").click()
      cy.xpath("//span[@class='toggle']").click()
    })
  })
  
  describe('incorect input & mandatory field', () => {
    it('alert show', () => {
      cy.addToCartAndCheckout()
      cy.xpath("//div[@class='field required']//input[@id='customer-email']")
        .type('waw')
      cy.xpath("//input[@name='firstname']")
        .type('test')
        .type('{backspace}{backspace}{backspace}{backspace}')
      cy.xpath("//input[@name='lastname']")
        .type('test')
        .type('{backspace}{backspace}{backspace}{backspace}')
      cy.xpath("//input[@name='company']")
        .type('test')
        .type('{backspace}{backspace}{backspace}{backspace}')
      cy.xpath("//fieldset[@class='field street admin__control-fields required']//div[@class='field _required']//input[@class='input-text']")
        .type('test')
        .type('{backspace}{backspace}{backspace}{backspace}')
      cy.xpath("//input[@name='city']")
        .type('test')
        .type('{backspace}{backspace}{backspace}{backspace}')
      cy.xpath("//select[@name='region_id']")
        .should('be.visible')
        .select('1')
      cy.xpath("//input[@name='postcode']")
        .type('test')
        .type('{backspace}{backspace}{backspace}{backspace}')
      cy.xpath("//select[@name='country_id']/option[text()='United States']")
      cy.xpath("//input[@name='telephone']")
        .type('test')
        .type('{backspace}{backspace}{backspace}{backspace}')
      cy.xpath("//span[.='Next']").click()

    })
  })
  
  
  describe('iput shipping field', () => {
    it('input shipping success', () => {
      cy.shippingField()
    })
  })

  describe('riview and paymentfield', () => {
    it('riview and payment', () => {
      cy.shippingField()
      cy.xpath("//div[@class='title']").click()
      cy.xpath("//div[@class='ship-to']//button[@class='action action-edit']").click()
      cy.xpath("//span[.='Next']").click()
      cy.wait(2000)
      cy.xpath("//div[@class='ship-via']//button[@class='action action-edit']").click()
      cy.xpath("//span[.='Next']").click()  
      cy.wait(2000)
      cy.xpath("//span[@id='block-discount-heading']").click()
      cy.xpath("//button[@class='action action-apply']").click()
      cy.xpath("//button[@class='action primary checkout']").click()
      cy.wait(2000)
      cy.xpath("//a[.='Continue Shopping']").click()  
      cy.wait(2000)
    })
  })
  