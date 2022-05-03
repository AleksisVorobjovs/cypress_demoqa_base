import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import RadioButtonPage from "../../pageObjects/RadioButtonPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";
import ButtonPage from "../../pageObjects/ButtonPage";
import LinksPage from "../../pageObjects/LinksPage";

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
    it.only("API intercept", () => {
      LinksPage.createLink.click();
      LinksPage.linkResponse.should("contain","201");
    });
  });
});
