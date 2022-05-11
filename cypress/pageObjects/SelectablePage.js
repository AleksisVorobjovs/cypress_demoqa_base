import BasePage from "./BasePage";

class ButtonPage extends BasePage {
  static get url() {
    return "/selectable";
  }
  static get listValues() {
    return cy.get("#verticalListContainer")
  }
  static get gridTab() {
    return cy.get("#demo-tab-grid");
  }
  static get gridContainer() {
    return cy.get("#gridContainer");
  }
  static findGridElement(value){
    return this.gridContainer.contains(value).parent();
  }
  static get rightClickMessage() {
    return cy.get("#rightClickMessage");
  }
  static get dynamicClickMessage() {
    return cy.get("#dynamicClickMessage");
  }
}

export default ButtonPage;