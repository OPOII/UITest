const bookAuthor="Undertale withing";
const bookTitle="Magician reds";

describe('When the user wants to add a book without the author in the author field', ()=>{
    before(()=>{
        cy.visit('https://front-books-icesi.herokuapp.com');
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
    });

    it('the book must not be listed in the library',()=>{
        cy.get('#addBook').click();
        cy.get('#name').type(bookAuthor);
        cy.get('#saveButton').should('be.disabled');
        cy.get('#cancelButton').click();
        cy.get('table').contains('td',bookAuthor).should('not.exist');
    });
});

describe('When the user wants to add a book without the title in the title field', ()=>{
    before(()=>{
        cy.visit('https://front-books-icesi.herokuapp.com');
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
    });

    it('the book must not be listed in the library',()=>{
        cy.get('#addBook').click();
        cy.get('#author').type(bookTitle);
        cy.get('#saveButton').should('be.disabled');
        cy.get('#cancelButton').click();
        cy.get('table').contains('td',bookTitle).should('not.exist');
    });
});