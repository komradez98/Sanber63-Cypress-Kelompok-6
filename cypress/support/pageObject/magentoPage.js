class magentoPage {
    addToCartBtn = '#product-addtocart-button'
    updateCartBtn = '#product-updatecart-button'

    // pageObject Oca Yordan start
    clickAddToCart(){
        cy.get(this.addToCartBtn).click()
    }
    clickUpdateCartBtn(){
        cy.get(this.clickUpdateCartBtn).click()
    }
    // Oca yordan end
}
module.exports = new magentoPage()