import createElement from '../../../utlils/createFunction'
import './main.scss'
import {Html} from '../../../utlils/createFunction'
import {FormLogin} from '../../components/login-form/loginForm'
export default class MainView {
  mainCreate: Html
  form: Html
  constructor() {
    this.mainCreate = this.createMainContainer()
    this.form = this.createForm()
  }
  getHtmlElement() {
    return this.mainCreate
  }

  createMainContainer() {
    const main = this.createMain()
    const isAuthorized = localStorage.getItem('Login')
    let form = this.createForm()
    if (!isAuthorized) {
      main.append(form)
    }
    return main
  }

  createForm() {
    const form = new FormLogin().getHtmlElement()
    return form
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
  createMain() {
    const param = {
      tag: 'main',
      classes: ['main'],
      text: '',
    }
    const element = new createElement(param).getElement()
    return element
  }
}
