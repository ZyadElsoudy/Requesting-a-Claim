/// <reference types="cypress"/>
import 'cypress-file-upload';
describe('Login Functionality', () => {
  it('Submitting a Claim Successfully', () => {
    //cy.viewport('1920*1080');
    cy.visit('https://bestinsurance.trumobile.dev');
    //cy.get('.form-control').type('your-username-value');
    cy.get('#cy-sign-in').click();
    cy.get('#username').should('be.visible').type('jane.doe@trufla.com');
    cy.get('#password').type('Demo@12345');
    cy.get('#kc-login').click();
    cy.get('.introjs-skipbutton').should('be.visible').click();
   // cy.get('.mat-icon', {timeout:50000}).should('be.visible').click({multiple:true ,force:true});
   // cy.get('.mat-button-wrapper',{timeout:50000}).should('be.visible').click({multiple:true, force:true});
    cy.get('#StartClaim').click({force:true});
    //cy.get('#UserMenu',{timeout:40000}).should('be.visible').click();
    cy.get('div[class="category-item ng-star-inserted"]').eq(1).click({force:true});
    cy.get('span[class="mat-button-wrapper"]').contains('Start').click();
    cy.get('input[class="ant-select-selection-search-input"]').click();
    cy.contains('206 890 OJKNIDAIIZ AW').click();
    //cy.contains("Description of damage to Property").type('Description');
    cy.get('input.tru-text-input[placeholder="Description of damage to Property"]').type('Description');
    cy.get('input[placeholder="YYYY-MM-DD"]').click();
    cy.get('div[class="ant-picker-cell-inner"]').contains('13').click();
    cy.get('input[type="file"]').eq(0).attachFile('img.jpg');
    cy.contains('Submit').click();

    //cy.get('.ant-select-selection-item', { timeout: 10000 }).should('be.visible');

    //cy.get('body').click();
    //cy.get('.mat-icon', {timeout:50000}).should('be.visible').click({multiple:true ,force:true})
  })
  
})