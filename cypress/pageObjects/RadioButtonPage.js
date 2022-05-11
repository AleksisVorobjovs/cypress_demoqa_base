import BasePage from "./BasePage";

class RadioButtonPage extends BasePage {
  static get url() {
    return "/radio-button";
  }
  static get yesChecked() {
    return cy.get("#yesRadio");
  }
  static get impressiveChecked() {
    return cy.get("#impressiveRadio");
  }
  static get noChecked() {
    return cy.get("#noRadio");
  }
  static get checkedResult() {
    return cy.get(".text-success");
  }

 
  
}

export default RadioButtonPage;
