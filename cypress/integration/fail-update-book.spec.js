const actualBookAuthor="Slack winter";
const actualBookTitle="Clean Code: A Handbook of Agile Software Craftsmanship";
const newBookAuthor="Withouth Winter";
const newBookTitle="The silence in the wild";

describe('When the user wants to update the book withouth the name field in blank',()=>{
    before(()=>{
        cy.visit('https://front-books-icesi.herokuapp.com');
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
    });
    it('The book must not be in the library list',()=>{
        cy.get("table").contains('tr', actualBookTitle).invoke("index").then((i) =>{
            cy.get(`:nth-child(${i+1}) > .ant-table-cell > button.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only`).click();
        });
        cy.get("#name").click().clear();
        cy.get("#author").click().clear();
        cy.get('#author').click().type(newBookTitle);
        cy.get('#saveButton').should('be.disabled');
        cy.get('#cancelButton').click();
        cy.get('table').contains('tr',newBookTitle).should('not.exist');
    });
});

describe('When the user wants to update the book withouth the author field in blank',()=>{
    before(()=>{
        cy.visit('https://front-books-icesi.herokuapp.com');
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
    });
    it('The book must not be in the library list',()=>{
        cy.get("table").contains('tr', actualBookTitle).invoke("index").then((i) =>{
            cy.get(`:nth-child(${i+1}) > .ant-table-cell > button.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only`).click();
        });
        cy.get("#name").click().clear();
        cy.get("#author").click().clear();
        cy.get('#name').click().type(newBookAuthor);
        cy.get('#saveButton').should('be.disabled');
        cy.get('#cancelButton').click();
        cy.get('table').contains('tr',newBookAuthor).should('not.exist');
    });
});

