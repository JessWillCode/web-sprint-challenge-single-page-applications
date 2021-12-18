describe('Bloomin Eats App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); 
        expect({}).to.eql({}); 
      })

      const textInput = () => cy.get('input[name=name]');
      
      const topPep = () => cy.get('input[name=pepperoni]');
      const topSau = () => cy.get('input[name=sausage]');
      const topOlives = () => cy.get('input[name=olives]');

      const submitBtn = () => cy.get('button[id="order-button"]');

      describe('Entering Name', () => {
          it('can type in a name', () => {
              textInput()
              .type('Wally')
              .should('have.value', 'Wally')
          })

      describe('Adding toppings in Checkbox', () => {
          it('can add multiple toppings', () => {
              topPep().check();
              topSau().check();
              topOlives().check();
          })

       describe('Submitting the form', () => {
           it('can submit the form', () => {
            textInput()
              .type('Thomas')
              .should('have.value', 'Thomas')  
              
            cy.get('select').select('medium');

            topPep().check();
            topSau().check();
            topOlives().check();
            
            submitBtn().click();
           })
       })
      })    
      })
})