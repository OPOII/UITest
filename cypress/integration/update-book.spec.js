const bookAuthor="Edited prove author";
const bookTitle="Title book edited";
describe('when the user wants to update a book',()=>{
    before(()=>{
        cy.visit('https://front-books-icesi.herokuapp.com');
        cy.get(':nth-child(5) > :nth-child(4) > .ant-btn').click();
        cy.get('#name').clear();
        cy.get("#author").clear();
        cy.get("#name").type(bookTitle);
        cy.get("#author").type(bookAuthor);
        cy.get('#saveButton').click();
        cy.get('#cancelButton').click();
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
    });
    it("The book must be modified in the list of books",()=>{
        cy.get('table').contains('td',bookAuthor).should('be.visible');
        cy.get('table').contains('td',bookTitle).should('be.visible');
    });
});