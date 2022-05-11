import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import RadioButtonPage from "../../pageObjects/RadioButtonPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";
import ButtonPage from "../../pageObjects/ButtonPage";
import LinksPage from "../../pageObjects/LinksPage";
import SelectablePage from "../../pageObjects/SelectablePage";
context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });
//.skip <--- skippot scenaariju
//.only <--- izpildiit tikai testus ar .only tag
    it("Filling in Text Boxes", () => {
      cy.fixture('textBoxPageData').then((data) => {
        TextBoxPage.nameElement.type(data.name);
        TextBoxPage.emailElement.type(data.email);
        TextBoxPage.currentAddressElement.type(data.currentAddress);
        TextBoxPage.permanentAddressElement.type(data.permanentAddress);
        TextBoxPage.submitElement.click();
        TextBoxPage.pName.should("contain",data.name);
        TextBoxPage.pEmail.should("contain",data.email);
        TextBoxPage.pCurrentAddress.should("contain",data.currentAddress);
        TextBoxPage.pPermanentAddress.should("contain",data.permanentAddress);
    });
  });
  });
  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    it("Filling in Check Boxes", () => {
      //click +/expand button
      //Click Notes and General checkbox
      CheckBoxPage.expandButton.click();
      CheckBoxPage.checkboxList.contains("Notes").click();
      CheckBoxPage.checkboxList.contains("General").click();
      CheckBoxPage.checkedResult.should("contain","notes").should("contain","general");

        
  });
  it("Filling in Check Boxes", () => {
    //click +/expand button
    //Click Notes and all Office checkboxes
    CheckBoxPage.expandButton.click();
    CheckBoxPage.checkboxList.contains("Notes").click();
    CheckBoxPage.checkboxList.contains("Office").click();
    CheckBoxPage.checkedResult.should("contain","notes").should("contain","office");
});
  });
  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });
    it("Filling in radio buttons", () => {
      //click yes and validate it
      RadioButtonPage.yesChecked.click({ force: true });
      RadioButtonPage.checkedResult.should("contain","Yes");
    });
    it("Filling in radio buttons", () => {
      //click Impressive and validate it
      RadioButtonPage.impressiveChecked.click({ force: true });
      RadioButtonPage.checkedResult.should("contain","Impressive");
    });
    it("Filling in radio buttons", () => {
      //click Impressive and validate it
      RadioButtonPage.noChecked.should("exist").should("be.disabled");
    });
  });
  context("Web Table scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });
    it("Filling in web table", () => {
      //click add button
      //Input data
      //click submit
      //validate data
      WebTablesPage.addUser.click();
      WebTablesPage.enterFirstName.type("Aleksis");
      WebTablesPage.enterLastName.type("Vorobjovs");
      WebTablesPage.enterUserEmail.type("aleksisvorobjovs@gmail.com");
      WebTablesPage.enterAge.type("20");
      WebTablesPage.enterSalary.type("46543653");
      WebTablesPage.enterDepartment.type("idk some department");
      WebTablesPage.submit.click();
      WebTablesPage.findRow("aleksisvorobjovs@gmail.com").should("contain","Aleksis");
    });
    it("Filling in web table", () => {
      //delete function
      WebTablesPage.rows.should("contain","alden@example.com");
      WebTablesPage.deleteRow("alden@example.com");
      WebTablesPage.rows.should("not.contain","alden@example.com");
    });
  });
  context("Button scenarios", () => {
    beforeEach(() => {
      ButtonPage.visit();
    });
    it("Pressing buttons", () => {
      //create elementes
      //click them correct way
      ButtonPage.doubleClickMeButton.dblclick();
      ButtonPage.doubleClickMessage.should("be.visible").should("contain","You have done a double click");
      ButtonPage.rightClickMe.rightclick();
      ButtonPage.rightClickMessage.should("be.visible").should("contain","You have done a right click");
      ButtonPage.clickMeButton.click();
      ButtonPage.dynamicClickMessage.should("be.visible").should("contain","You have done a dynamic click");
    });
  });
  context("Links scenarios", () => {
    beforeEach(() => {
      LinksPage.visit();
    });
    it("API intercept", () => {
      LinksPage.createLink.click();
      LinksPage.linkResponse.should("contain","201");
    });
  });
  context("Selectable test", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });
    it.only("Click to change field state in selectable list tab", () => {
      //Noklikot uz laukiem “Cras justo odio” un “Morbi leo risus”.
      //Novalidēt, ka noklikotie lauki ir aktīvi. (.invoke('class')).
      //Novalidēt, ka pārējie lauki nav mainījuši stāvokli.
      SelectablePage.listValues.contains("Cras justo odio").click();
      SelectablePage.listValues.contains("Morbi leo risus").click();

      SelectablePage.listValues.invoke('slice',0,3).contains("Cras justo odio").should('have.class','active');
      SelectablePage.listValues.invoke('slice',0,3).contains("Morbi leo risus").should('have.class','active');
      SelectablePage.listValues.invoke('slice',0,3).contains("Dapibus ac facilisis in").should('not.have.class','active');
      SelectablePage.listValues.invoke('slice',0,3).contains("Porta ac consectetur ac").should('not.have.class','active');
    });
    it.only("Click to change field state in selectable grid tab", () => {
      //Atvērt sadaļu “Grid”.
      //Noklikot laukus “Two”, “Four”, “Six” un “Eight”.
      //Novalidēt, ka lauki “Two”, “Four”, “Six” un “Eight” ir aktīvi (.invoke('class')).
      //Novalidēt, ka pārējie lauki nav mainījuši stāvokli.
      SelectablePage.gridTab.click();
      SelectablePage.gridContainer.contains("Two").click();
      SelectablePage.gridContainer.contains("Four").click();
      SelectablePage.gridContainer.contains("Six").click();
      SelectablePage.gridContainer.contains("Eight").click();
      SelectablePage.gridContainer.invoke('slice',0,8).contains("One").should('not.have.class','active');
      SelectablePage.gridContainer.invoke('slice',0,8).contains("Two").should('have.class','active');
      SelectablePage.gridContainer.invoke('slice',0,8).contains("Three").should('not.have.class','active');
      SelectablePage.gridContainer.invoke('slice',0,8).contains("Four").should('have.class','active');
      SelectablePage.gridContainer.invoke('slice',0,8).contains("Five").should('not.have.class','active');
      SelectablePage.gridContainer.invoke('slice',0,8).contains("Six").should('have.class','active');
      SelectablePage.gridContainer.invoke('slice',0,8).contains("Seven").should('not.have.class','active');
      SelectablePage.gridContainer.invoke('slice',0,8).contains("Eight").should('have.class','active');
      SelectablePage.gridContainer.invoke('slice',0,8).contains("Nine").should('not.have.class','active');
    });
  });

});
