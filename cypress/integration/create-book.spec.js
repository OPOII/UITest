const bookAuthor="Slack winter";
const bookTitle="The freedom of the wild";
describe('when the user wants to register a book',()=>{
    before(()=>{
        cy.visit('https://front-books-icesi.herokuapp.com');
        cy.get('#addBook').click();
        cy.get('#name').type(bookTitle);
        cy.get('#author').type(bookAuthor);
        cy.get('#saveButton').click();
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
    });
    it("The book is created with the author and the title",()=>{
        cy.get('table').contains('td',bookAuthor).should('be.visible');
    });
});