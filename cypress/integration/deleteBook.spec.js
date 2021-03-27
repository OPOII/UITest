const bookAuthor="Geraciona.";
const bookTitle="Hunter";
describe('when the user wants to update a book',()=>{
    before(()=>{
        cy.visit('https://front-books-icesi.herokuapp.com');
        cy.get('#addBook').click();
        cy.get('#name').type(bookTitle);
        cy.get('#author').type(bookAuthor);
        cy.get('#saveButton').click();
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
        cy.get("table").contains('tr', bookTitle).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input`).click();
        });
        cy.get('#delteBook').click();

    });
    it("The book must be modified in the list of books",()=>{
        cy.get('table').contains('td',bookAuthor).should('not.exist');
        cy.get('table').contains('td',bookTitle).should('not.exist');
        
    });
});