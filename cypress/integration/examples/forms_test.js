describe('Pizza Test', () => {
     it('can navigate to http://localhost:3000', () => {
         cy.visit('http://localhost:3000/pizza')
         cy.url().should('include', 'localhost')
     })
    describe('Input Test', () => {
      it('can get name input', () => {
          cy.get("input[name='name']")
          .type("Ashley")
          .should("have.value", "Ashley")
      })
    describe('Toppings Test', () => {
        it('can select topping', () => {
            cy.get('input[name="pepperoni"]').check().should('be.checked', 'checked')
            cy.get('input[name="bananapeppers"]').check().should('be.checked', 'checked')
            cy.get('input[name="sausage"]').check().should('be.checked', 'checked')
            cy.get('input[name="onions"]').check().should('be.checked', 'checked')
            cy.get('input[name="spinach"]').check().should('be.checked', 'checked')
        })
    })
    describe('Data Submission Test', () => {
        it("user can submit", () => {
            cy.get('form').submit()
        })
    })
    })
})