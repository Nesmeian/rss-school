export interface Param {
  tag?: string;
  text?: string;
  parent?: HTMLElement | null;
  classes?: string[];
}
export type Html = HTMLTemplateElement | Element;
export default class createElement {
  element: Html;
  constructor(param: Param) {
    this.element = this.createElement(param);
  }
  getElement(): Html {
    return this.element;
  }
  createElement(param: Param): Html {
    const element = document.createElement(param.tag || "");
    this.setCssClasses(element, param.classes || [""]);
    this.setTextContent(element, param.text || "");
    return element;
  }
  setCssClasses(element: Element, cssClasses: string[]): void {
    cssClasses.forEach((className) => element.classList.add(className));
  }
  setTextContent(element: Element, text: string): void {
    element.textContent = text;
  }
}
