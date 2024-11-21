export class CartPage {
  validateCartItems() {
    cy.get('.nav-link').contains('Cart').click();
    cy.get('.cart-item').should('have.length.at.least', 2);
    this.validateCartTotal();
  }

  validateCartTotal() {
    cy.get('.cart-item .price').then(($prices) => {
      const prices = [...$prices].map((price) => parseFloat(price.innerText));
      const total = prices.reduce((sum, val) => sum + val, 0);
      cy.get('.total').invoke('text').should('contain', total.toString());
    });
  }
}
