import loginpage from "../../cypress/pages/LoginPage.js"
import requestclaim from "../../cypress/pages/RequestClaimPage.js"
describe('Requesting a Home Claim', () => {
    it('Submitting a Home Claim Successfully', () => {
        cy.visit('https://bestinsurance.trumobile.dev');
        loginpage.loginWithValidCredentials();
        //requestclaim.RequestingClaim();
    })
})