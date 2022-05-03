import BasePage from "./BasePage";

class WebTablePage extends BasePage {
  static get url() {
    return "/webtables";
  }
  //example
  static get exampleElement() {
    return cy.get("exampleSelector");
  } 
  static get addUser() {
    return cy.get("#addNewRecordButton");
  }
  static get enterFirstName() {
    return cy.get("#firstName");
  }
  static get enterLastName() {
    return cy.get("#lastName");
  }
  static get enterUserEmail() {
    return cy.get("#userEmail");
  }
  static get enterAge() {
    return cy.get("#age");
  }
  static get enterSalary() {
    return cy.get("#salary");
  }
  static get enterDepartment() {
    return cy.get("#department");
  }
  static get submit() {
    return cy.get("#submit");
  }
  static get rows() {
    return cy.get("[role='rowgroup']");
  }
  static findRow(value){
      return this.rows.contains(value).parent();
  }
  static deleteRow(value){
     return this.findRow(value).find("[title='Delete']").click();
}
}

export default WebTablePage;
