import createElement from "../utils/createElems";
import { Html } from "../utils/createElems";
import "./authForm.scss";
export class AuthForm {
  conditionLogin: boolean;
  conditionPassword: boolean;
  constructor() {
    this.conditionLogin = false;
    this.conditionPassword = false;
  }
  collectForm(): Html {
    const form = this.createForm();
    const login = this.createInputLogWrapper();
    const password = this.createInputPassWrapper();
    const button = this.createButton();
    form.append(login);
    form.append(password);
    form.append(button);
    return form;
  }

  createForm(): Html {
    const param = {
      tag: "form",
      classes: ["auth__form", "form"],
    };
    return new createElement(param).getElement();
  }
  createInputLogWrapper(): Html {
    const param = {
      tag: "div",
      classes: ["auth__wrapper-login", "auth__input-wrapper"],
    };
    const wrapper = new createElement(param).getElement();
    const label = this.createLabelLogin();
    wrapper.append(label);
    return wrapper;
  }
  createLabelLogin(): Html {
    const param = {
      tag: "label",
      classes: ["auth__label", "label"],
      text: "Login",
    };
    const lable = new createElement(param).getElement();
    const input = this.createInputLogin();
    lable.append(input);
    return lable;
  }

  createInputLogin(): Html {
    const param = {
      tag: "input",
      classes: ["auth__input-login", "input"],
    };
    const login = new createElement(param).getElement();
    login.setAttribute("type", "text");
    login.addEventListener("focus", () => {});
    login.addEventListener("blur", () => {
      const wrapper = document.querySelector(".auth__wrapper-login");
      this.validation(login, "Login", wrapper);
    });
    return login;
  }
  createInputPassWrapper(): Html {
    const param = {
      tag: "div",
      classes: ["auth__wrapper-password", "auth__input-wrapper"],
    };
    const wrapper = new createElement(param).getElement();
    const label = this.createLabelPassword();
    wrapper.append(label);
    return wrapper;
  }
  createLabelPassword(): Html {
    const param = {
      tag: "label",
      classes: ["auth__label", "label"],
      text: "Password",
    };
    const lable = new createElement(param).getElement();
    const input = this.createInputPassword();
    lable.append(input);
    return lable;
  }
  createInputPassword(): Html {
    const param = {
      tag: "input",
      classes: ["auth__input-password", "input"],
    };
    const password = new createElement(param).getElement();
    password.setAttribute("type", "text");
    password.addEventListener("blur", () => {
      const wrapper = document.querySelector(".auth__wrapper-password");
      this.validation(password, "Password", wrapper);
    });
    return password;
  }

  createButton(): Html {
    const param = {
      tag: "button",
      classes: ["auth__button", "button"],
      text: "Submit",
    };
    const button = new createElement(param).getElement();
    button.setAttribute("type", "button");
    button?.setAttribute("disabled", "true");

    button.addEventListener("click", () => {
      const loginValue: HTMLInputElement | null =
        document.querySelector(".auth__input-login");
      const PasswordValue: HTMLInputElement | null = document.querySelector(
        ".auth__input-password"
      );
      const authorization = JSON.stringify({
        id: `${this.idGenerator()}`,
        type: "USER_LOGIN",
        payload: {
          user: {
            login: `${loginValue}`,
            password: `${PasswordValue}`,
          },
        },
      });
      console.log(authorization);
    });
    return button;
  }

  validation(input: Html, purpose: string, wrapper: Element | null): void {
    const minLength: number = 4;
    const button = document.querySelector(".auth__button");
    if (input instanceof HTMLInputElement) {
      const inputVal = input.value.split("");
      const message = wrapper;
      const messageValue: Html = this.validationMessage();
      if (inputVal.length > 0) {
        if (inputVal[0] !== inputVal[0].toUpperCase()) {
          messageValue.innerHTML += `The ${purpose} must start with a capital letter <br>`;
          if (purpose === "Login") {
            this.conditionLogin = false;
          } else if (purpose === "Password") {
            this.conditionPassword = false;
          }
        }
        if (inputVal.length < minLength) {
          messageValue.innerHTML += `The ${purpose} must be longer than 4 <br>`;
          if (purpose === "Login") {
            this.conditionLogin = false;
          } else if (purpose === "Password") {
            this.conditionPassword = false;
          }
        }
        if (purpose === "Login") {
          this.conditionLogin = true;
        } else if (purpose === "Password") {
          this.conditionPassword = true;
        }
      }
      if (inputVal.length === 0) {
        messageValue.textContent += `Please add your ${purpose}`;
        if (purpose === "Login") {
          this.conditionLogin = false;
        } else if (purpose === "Password") {
          this.conditionPassword = false;
        }
      }
      if (!this.conditionLogin || !this.conditionPassword) {
        button?.setAttribute("disabled", "true");
      }
      this.validationMessageDelete(wrapper);
      message?.append(messageValue);
    }
    if (this.conditionLogin && this.conditionPassword) {
      console.log(this.conditionLogin, this.conditionPassword);
      button?.removeAttribute("disabled");
    }
  }

  validationMessage(): Html {
    const param = {
      tag: "div",
      classes: ["auth__message", "message"],
    };
    return new createElement(param).getElement();
  }
  validationMessageDelete(wrapper: Element | null): void {
    if (wrapper) {
      const message = wrapper.querySelectorAll(".auth__message");
      message.forEach((e) => {
        e.remove();
      });
    }
  }
  idGenerator(): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }
}
