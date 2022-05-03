import BasePage from "./BasePage";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }
  //example
  static get exampleElement() {
    return cy.get("exampleSelector");
  } 
  static get expandButton() {
    return cy.get("button[aria-label='Expand all']");
  }
  static get checkboxList() {
    return cy.get(".rct-title");
  }
  static get checkedResult() {
    return cy.get("#result");
  } 
 
  
}

export default CheckBoxPage;
