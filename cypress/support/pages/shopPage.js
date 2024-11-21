export class ShopPage {
  addProductsToCart() {
    cy.get('.btn-primary').first().click();
    cy.get('.btn-primary').last().click();
  }

  validateProductsInShop() {
    cy.get('.text-center.col-4').each(($el) => {
      cy.wrap($el).find('.font-weight-bold').should('not.be.empty');
      cy.wrap($el).find('.font-weight-bold').invoke('text').should('match', /^[a-zA-Z0-9 ]+$/);
      cy.wrap($el).find('.text-muted').invoke('text').should('match', /\d+/);
    });
  }
}
