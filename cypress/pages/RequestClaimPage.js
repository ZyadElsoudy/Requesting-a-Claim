import 'cypress-file-upload';
class requestclaim{
    elements={
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
    }
    RequestingClaim(){
        this.elements.Startclaim.click({force:true});
        this.elements.homeclaim.eq(1).click({force:true});
        this.elements.startbtn.contains('Start').click();
        this.elements.selectproperty.click();
        this.elements.selectedproperty.click();
        this.elements.Descriptionofdamage.type('Description');
        this.elements.selectcalender.click();
        this.elements.selectedDate.click();
        this.elements.attachImage.attachFile('img.jpg');
        this.elements.Submitbtn.click();
    }
}
module.exports=new requestclaim();