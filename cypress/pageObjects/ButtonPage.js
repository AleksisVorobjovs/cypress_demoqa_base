import BasePage from "./BasePage";

class ButtonPage extends BasePage {
  static get url() {
    return "/buttons";
  }
  //example
  static get exampleElement() {
    return cy.get("exampleSelector");
  } 
  static get clickMeButton() {
    return cy.get(".btn-primary").contains(/^Click Me/);
  }
  static get doubleClickMeButton() {
    return cy.get("#doubleClickBtn");
  }
  static get doubleClickMessage() {
    return cy.get("#doubleClickMessage");
  }
  static get rightClickMe() {
    return cy.get("#rightClickBtn");
  }
  static get rightClickMessage() {
    return cy.get("#rightClickMessage");
  }
  static get dynamicClickMessage() {
    return cy.get("#dynamicClickMessage");
  }
}

export default ButtonPage;
