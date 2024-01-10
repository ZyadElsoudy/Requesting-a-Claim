class loginpage{
    /*elements={
        signinbtn : () => cy.get('#cy-sign-in'),
        username  : () => cy.get('#username'),
        password  : () => cy.get('#password'),
        loginBtn  : () => cy.get('#kc-login'),
        Skipbtn   : () => cy.get('.introjs-skipbutton')
    }*/
    get signinbtn(){
        return cy.get('#cy-sign-in');
    }
    get username(){
        return cy.get('#username');
    }
    get password(){
        return cy.get('#password');
    }
    get loginBtn(){
        return cy.get('#kc-login');
    }
    get Skipbtn(){
        return cy.get('.introjs-skipbutton').should('be.visible');
    }
    get cookieVal(){
        return cy.getCookie('MUID');
    }
    cookie(cookieName, value){
        cy.setCookie(cookieName,value);
    }
    loginWithValidCredentials(){
        //this.elements.signinbtn.click();
        this.signinbtn.click();
        /*this.username.should('be.visible').type('jane.doe@trufla.com');
        this.password.type('Demo@12345');*/
        cy.get('@testData').its('users').each((user) => {
            this.username.should('be.visible').type(user.email);
            this.password.type(user.password);

        })
        this.loginBtn.click();
        this.Skipbtn.click();
        this.cookieVal.log();
        this.cookie("QA", "Val");
        /*this.elements.username.should('be.visible').type('jane.doe@trufla.com');
        this.elements.password.type('Demo@12345');
        this.elements.loginBtn.click();
        this.elements.Skipbtn.should('be.visible').click();*/
    }
}
    module.exports=new loginpage();
