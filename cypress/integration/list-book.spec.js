const books=
describe('when the user wants to register a book',()=>{
    before(()=>{
        cy.visit('https://front-books-icesi.herokuapp.com');
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
        
    });
    it("The book is created with the author and the title",()=>{
        cy.get('table').find('tr').should('have.length.greaterThan', 0);
    });
});