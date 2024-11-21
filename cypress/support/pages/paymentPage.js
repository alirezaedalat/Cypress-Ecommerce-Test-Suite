export class PaymentPage {
  completePayment() {
    cy.contains('Pay with Card').click();
    cy.get('iframe').then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body).find('input[name="cardnumber"]').type('4242424242424242');
      cy.wrap(body).find('input[name="exp-date"]').type('12/25');
      cy.wrap(body).find('input[name="cvc"]').type('123');
      cy.wrap(body).find('input[name="postal"]').type('12345');
    });
    cy.contains('Pay').click();
  }
}
