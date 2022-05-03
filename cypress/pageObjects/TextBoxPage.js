import BasePage from "./BasePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }
  static get nameElement() {
    return cy.get("#userName");
  }
  static get emailElement() {
    return cy.get("#userEmail");
  }
  static get currentAddressElement() {
    return cy.get("textarea[id='currentAddress']")
  }
  static get permanentAddressElement() {
    return cy.get("textarea[id='permanentAddress']");
  }
  static get submitElement() {
    return cy.get("#submit");
  }
  static get pName() {
    return cy.get("#name");
  }
  static get pEmail() {
    return cy.get("#email");
  }
  static get pCurrentAddress() {
    return cy.get("p#currentAddress");
  }
  static get pPermanentAddress() {
    return cy.get("p#permanentAddress");
  }
}

export default TextBoxPage;
