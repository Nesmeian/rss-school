export interface Param {
  tag?: string
  text?: string
  parent?: HTMLElement | null
  classes?: string[]
  callback?: Function | undefined | null
}
export type Html = HTMLTemplateElement | Element
export default class createElement {
  element: Html
  constructor(param: Param) {
    this.element = this.createElement(param)
    this.createElement(param)
  }
  getElement(): Html {
    return this.element
  }
  createElement(param: Param): Html {
    this.element = document.createElement(param.tag || '')
    this.setCssClasses(param.classes || [''])
    this.setTextContent(param.text || '')
    this.setCallback(param.callback)
    return this.element
  }
  setCssClasses(cssClasses: string[]) {
    cssClasses.forEach((className) => this.element?.classList.add(className))
  }
  setTextContent(text: string) {
    if (this.element) {
      this.element.textContent = text
    }
  }
  setCallback(callback: Function | undefined | null): void {
    if (this.element && callback) {
      this.element.addEventListener('click', (event) => callback(event))
    }
  }
}
