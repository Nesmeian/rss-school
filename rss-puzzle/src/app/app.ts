import MainView from './view/main/main'
import {Header} from './view/header/header'
export default class App {
  constructor() {
    this.createHeader()
    this.createMain()
    this.reCreateForm()
  }
  createHeader() {
    const header = new Header()
    const headerElem = header.createHeader()
    document.body.append(headerElem)
  }
  createMain() {
    const main = new MainView()
    let mainForm = main.createForm()
    console.log(mainForm)
    const mainElem = main.getHtmlElement()
    const wrapper = main.createWrapper()

    document.body.append(wrapper)
    wrapper.append(mainElem)
  }
  reCreateForm() {
    const deAuthButton = document.querySelector('log-out__button')
    const main = document.querySelector('logo')
    const form = document.querySelector('register__form')
    deAuthButton?.addEventListener('click', () => {
      localStorage.removeItem('Login')
      if (form instanceof HTMLElement) {
        main?.append(form)
      }
    })
  }
}
