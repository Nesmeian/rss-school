import createElement, {Html} from '../../../utlils/createFunction'
import './loginForm.scss'

export class FormLogin {
  form: Html
  constructor() {
    this.form = this.formCreate()
  }
  getHtmlElement() {
    return this.form
  }
  formCreate() {
    const container = this.createLoginForm()

    const nameLabel = this.createLoginNameLabel()
    const name: any = this.createLoginName()
    nameLabel.append(name)
    const surnameLabel = this.createLoginSurnameLabel()
    const surname: any = this.createLoginSurname()

    surnameLabel.append(surname)
    const button = this.createLoginButton()
    container.append(nameLabel)
    container.append(surnameLabel)
    container.append(button)
    container.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log(5)
    })
    return container
  }
  createLoginForm() {
    const param = {
      tag: 'form',
      classes: ['register__form'],
      text: '',
    }
    const element = new createElement(param).getElement()
    element.setAttribute('action', '')

    return element
  }

  createLoginNameLabel() {
    const param = {
      tag: 'label',
      classes: ['label', 'register__name-label'],
      text: 'Name',
    }
    let element = new createElement(param).getElement()
    return element
  }
  createLoginName() {
    const param = {
      tag: 'input',
      classes: ['input', 'register__name'],
      text: '',
    }
    const element = new createElement(param).getElement()
    element.setAttribute('type', 'text')
    element.setAttribute('required', '')
    element.setAttribute('min', '1')
    element.setAttribute('max', '15')
    return element
  }
  createLoginSurnameLabel() {
    const param = {
      tag: 'label',
      classes: ['label', 'register__surname-label'],
      text: 'Surname',
    }
    const element = new createElement(param).getElement()
    return element
  }
  createLoginSurname() {
    const param = {
      tag: 'input',
      classes: ['input', 'register__surname'],
      text: '',
    }

    const element = new createElement(param).getElement()
    element.setAttribute('type', 'text')
    element.setAttribute('min', '1')
    element.setAttribute('max', '15')
    element.setAttribute('required', '')
    return element
  }
  createLoginButton() {
    const param = {
      tag: 'button',
      classes: ['register__button'],
      text: 'Enter',
    }
    const element = new createElement(param).getElement()
    element.setAttribute('type', 'submit')
    return element
  }
}
