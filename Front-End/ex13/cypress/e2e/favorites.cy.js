describe('Favorites flow', () => {

    it('should open the site correctly', () => {
        cy.visit('https/localhos:3000');
    });

    it('should render the list correctly', () => {
        cy.get("[data-testid='list']").should('be.visible');
    });

    it('should render the list itens correctly', () => {
        cy.get("[data-testid='list-item-1']").should('be.visible');
        cy.get("[data-testid='list-item-20']").should('be.visible');
    });

    it('should render the list itens correctly', () => {
        cy.get("[data-testid='heart-1']").click('');
        cy.get("[data-testid='heart-1']").click('have.class', 'heart-selected');

        cy.get("[data-testid='heart-2']").click('');
        cy.get("[data-testid='heart-2']").click('have.class', 'heart-selected');

        cy.get("[data-testid='heart-3']").click('');
        cy.get("[data-testid='heart-3']").should('have.class', 'heart-selected');
    });

    it('should render the list itens correctly', () => {
        cy.get("[data-testid='heart-1']").click('have.class', 'heart-selected');

        cy.get("[data-testid='heart-2']").click('');
        cy.get("[data-testid='heart-2']").click('');
        cy.get("[data-testid='heart-2']").should('not.have.class', 'heart-selected');

        cy.get("[data-testid='heart-3']").click('');
        cy.get("[data-testid='heart-3']").click('');
        cy.get("[data-testid='heart-3']").should('not.have.class', 'heart-selected');
    });

})