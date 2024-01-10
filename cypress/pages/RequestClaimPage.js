import 'cypress-file-upload';
class requestclaim{
    /*elements={
        Startclaim:()=>cy.get('#StartClaim'),
        //newclaimbtn:()=>cy.get('div[class="category-item ng-star-inserted"]'),
        homeclaim:()=>cy.get('div[class="category-item ng-star-inserted"]').eq(1),
        startbtn:()=>cy.get('span[class="mat-button-wrapper"]').contains('Start'),
        selectproperty:()=>cy.get('input[class="ant-select-selection-search-input"]'),
        selectedproperty:()=>cy.contains('206 890 OJKNIDAIIZ AW'),
        Descriptionofdamage:()=> cy.get('input.tru-text-input[placeholder="Description of damage to Property"]'),
        selectcalender:()=> cy.get('input[placeholder="YYYY-MM-DD"]'),
        selectedDate:()=>cy.get('div[class="ant-picker-cell-inner"]').contains('13'),
        attachImage:()=>cy.get('input[type="file"]').eq(0),
        Submitbtn:()=>cy.contains('Submit')
    }*/
    get Startclaim(){
        return cy.get('#StartClaim');
    }
    get homeclaim (){
        return cy.get('div[class="category-item ng-star-inserted"]').eq(1);
    }
    get startbtn (){
        return cy.get('span[class="mat-button-wrapper"]').contains('Start');
    }
    get selectproperty (){
        return cy.get('input[class="ant-select-selection-search-input"]');
    }
    get selectedproperty (){
        return cy.contains('206 890 OJKNIDAIIZ AW');
    }
    get Descriptionofdamage (){
        return cy.get('input.tru-text-input[placeholder="Description of damage to Property"]');
    }
    get selectcalender (){
        return cy.get('input[placeholder="YYYY-MM-DD"]');
    }
    get selectedDate(){
        return cy.get('div[class="ant-picker-cell-inner"]').contains('1');
    }
    get attachImage (){
        return cy.get('input[type="file"]').eq(0);
    }
    get Submitbtn (){
        return cy.contains('Submit');
    }
    get TrueIcon(){
        return cy.get('#check');
    }
    get backbtn(){
        return cy.get('button[class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]');
    }
    RequestingClaim(){
        this.Startclaim.click({force:true});
        this.homeclaim.click({force:true,multiple:true});
        this.startbtn.click();
        this.selectproperty.click();
        this.selectedproperty.click();
        this.Descriptionofdamage.type('Description');
        this.selectcalender.click();
        this.selectedDate.click();
        this.attachImage.attachFile('img.jpg');
        this.Submitbtn.click();
        this.TrueIcon.should('be.visible');
        this.backbtn.should('be.visible');
}
}
module.exports=new requestclaim();