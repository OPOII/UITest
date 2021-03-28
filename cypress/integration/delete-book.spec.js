const bookAuthor="Slack winter";
const bookTitle="Marcianito";
describe('When the user wants to delete a book', ()=>{
    before(()=>{
        cy.visit("https://front-books-icesi.herokuapp.com");
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
    })
    it('The book should not exist in the library',()=>{
        cy.get("table").contains('tr', bookAuthor).invoke("index").then((i) =>{
            cy.get(`:nth-child(${i+1}) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input`).click();
        })
        cy.get('[nztype="default"]').click();
        cy.get("table").contains('tr', bookTitle).should('not.exist');
   
    });

})