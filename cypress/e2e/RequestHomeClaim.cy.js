import { it } from "mocha"
import loginpage from "../../cypress/pages/LoginPage.js"
import requestclaim from "../../cypress/pages/RequestClaimPage.js"
describe('Requesting a Home Claim', () => {
  before('Visit URL Before any Execution' ,()=>{
    cy.visit('https://bestinsurance.trumobile.dev');
    cy.fixture('Data.json').as('testData');
  })
  it('Submitting a Home Claim Successfully', () => {
      
        
        loginpage.loginWithValidCredentials();
        requestclaim.RequestingClaim();
        console.log("Test Success");
    })
    if (Cypress.env('REPORT')) {
      after(() => {
        const reportDir = 'cypress/results';
        const reportFilename = 'report.json';
    
        cy.task('mochawesome:merge', { files: `${reportDir}/*.json` })
          .then((mergedReport) => {
            cy.task('mochawesome:report', { options: { reportDir, reportFilename, reportTitle: 'My Test Report' }, reportJson: mergedReport })
          });
      });
    }

})

// cypress/integration/example_spec.js


  
  // Add the following lines to the end of the file to conditionally generate the report
 
  