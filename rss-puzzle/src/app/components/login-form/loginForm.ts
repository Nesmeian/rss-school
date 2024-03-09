
import createElement, { Html } from '../../../utlils/createFunction';
import './loginForm.scss';
type VariableType = 'name' | 'surname';
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

        const nameLabel = this.createLoginNameLabel();
        const name: Element | HTMLInputElement = this.createLoginName();
        nameLabel.append(name);
        const surnameLabel = this.createLoginSurnameLabel();
        const surname: Element | HTMLInputElement = this.createLoginSurname();

        surnameLabel.append(surname);
        const button = this.createLoginButton();
        container.append(nameLabel);
        container.append(surnameLabel);
        container.append(button);

        container.addEventListener('submit', (e) => {
            e.preventDefault();
            this.removeMessage();
            const notValideMessageName = this.createValidationMessage();
            const notValideMessageSurname = this.createValidationMessage();
            if (!this.validation(name, 3, notValideMessageName)) {
                nameLabel.append(notValideMessageName);
            }
            if (!this.validation(surname, 4, notValideMessageSurname)) {
                surnameLabel.append(notValideMessageSurname);
            }
        });
        return container;

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
    createLoginName() {
        const param = {
            tag: 'input',
            classes: ['input', 'register__name'],
            text: '',
        };
        const element = new createElement(param).getElement() as HTMLInputElement;
        element.setAttribute('type', 'text');
        return element;

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
    createLoginSurname() {
        const param = {
            tag: 'input',
            classes: ['input', 'register__surname'],
            text: '',
        };

        const element = new createElement(param).getElement();
        element.setAttribute('type', 'text');
        return element;
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
    createValidationMessage() {
        const param = {
            tag: 'div',
            classes: ['form__message'],
        };
        const element = new createElement(param).getElement();
        return element;
    }
    validation(input: Element | HTMLInputElement, minLeng: number, message: Html) {
        let condition = false;
        if (input instanceof HTMLInputElement) {
            let result = input.value.split('');
            let minLength = minLeng;
            if (result.length >= minLength) {
                if (result[0] === result[0].toUpperCase()) {
                    result.forEach((e: string, i: number) => {
                        if (/^[A-Z][a-zA-Z-]*$/.test(e)) {
                            input.classList.add('input--active');
                            condition = true;
                        }
                    });
                } else {
                    input.classList.add('input--inactive');
                    message.textContent = 'The input is not valid, the first letter must be capitalized ';
                }
            } else {
                input.classList.add('input--inactive');
                message.textContent = 'The input is not valid is too short';
            }
        }
        return condition;
    }
    removeMessage() {
        const errorMessage = document.querySelectorAll('.form__message');
        errorMessage.forEach((elem) => {
            elem.remove();
        });
    }
}