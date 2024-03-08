import createElement from '../../../utlils/createFunction'
import './main.scss'
import {Html} from '../../../utlils/createFunction'
import {FormLogin} from '../../components/login-form/loginForm'
export default class MainView {
  mainCreate: Html
  constructor() {
    this.mainCreate = this.createMainContainer()
  }
  getHtmlElement() {
    return this.mainCreate
  }

  createMainContainer() {
    const main = this.createMain().getElement()
    const form = new FormLogin()
    main.append(form.getHtmlElement())
    return main
  }
  createWrapper() {
    const param = {
      tag: 'div',
      classes: ['wrapper'],
      text: '',
    }
    const element = new createElement(param)
    return element
  }
  createMain() {
    const param = {
      tag: 'main',
      classes: ['main'],
      text: '',
    }
    const element = new createElement(param)
    return element
  }
}
