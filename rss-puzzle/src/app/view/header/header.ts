import createElement from '../../../utlils/createFunction'
import {DeAuthorization} from '../../components/de-authorization/log-out'
import './header.scss'
export class Header {
  constructor() {
    this.createHeader()
  }
  createHeader() {
    const param = {
      tag: 'header',
      classes: ['header'],
      text: '',
    }

    const result = new createElement(param).getElement()
    const deAuth = new DeAuthorization()
    const wrapper = this.createWrapper()
    const headerContainer = this.createHeaderContainer()
    result.append(wrapper)
    wrapper.append(headerContainer)
    headerContainer.append(this.createLogo())
    headerContainer.append(deAuth.createDeAuthorization())
    const main = document.querySelector('main')
    return result
  }
  createLogo() {
    const param = {
      tag: 'div',
      classes: ['logo'],
      text: '',
    }
    let result = new createElement(param).getElement()
    return result
  }

  createWrapper() {
    const param = {
      tag: 'div',
      classes: ['wrapper'],
      text: '',
    }
    const element = new createElement(param).getElement()
    return element
  }
  createHeaderContainer() {
    const param = {
      tag: 'div',
      classes: ['Header__container'],
      text: '',
    }
    const element = new createElement(param).getElement()
    return element
  }
}
