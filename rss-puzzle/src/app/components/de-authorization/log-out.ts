import createElement from '../../../utlils/createFunction'
import './log-out.scss'
export class DeAuthorization {
  constructor() {
    this.createDeAuthorization()
  }
  createDeAuthorization() {
    const deAuthBtn = this.createDeAuthorizationBtn()
    return deAuthBtn
  }
  getHtmlElement() {
    return this.createDeAuthorization
  }

  createDeAuthorizationBtn() {
    const param = {
      tag: 'button',
      classes: ['log-out__button'],
      text: 'Log Out',
    }
    const element = new createElement(param).getElement()
    return element
  }
}
