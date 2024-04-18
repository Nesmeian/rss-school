import createElement from "../utils/createElems";
import { Html } from "../utils/createElems";
export class AuthForm {
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
    login.addEventListener("blur", () => {
      const wrapper = document.querySelector(".auth__wrapper-login");
      console.log(wrapper);
      this.validation(login, "Login", wrapper);
    });
    return login;
  }
  createInputPassWrapper(): Html {
    const param = {
      tag: "div",
      classes: ["auth__wrapper-login", "auth__input-wrapper"],
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
    return new createElement(param).getElement();
  }

  createButton(): Html {
    const param = {
      tag: "button",
      classes: ["auth__button", "button"],
      text: "Auth",
    };
    const button = new createElement(param).getElement();
    button.setAttribute("disabled", "true");
    return button;
  }

  validation(input: Html, purpose: string, wrapper: Element | null): void {
    const minLength: number = 5;
    if (input instanceof HTMLInputElement) {
      const inputVal = input.value.split("");
      const message = wrapper;
      const messageValue: Html = this.validationMessage();
      if (purpose === "Login") {
        if (inputVal.length > 0) {
          if (inputVal[0] !== inputVal[0].toUpperCase()) {
            messageValue.innerHTML +=
              "Login must start with Capital letter <br>";
          }
          if (inputVal.length < minLength) {
            messageValue.innerHTML += "Login must be longer than 5 <br>";
          }
        } else if (inputVal) {
          messageValue.textContent += "Please add your Login";
        }
        this.validationMessageDelete(wrapper);
        message?.append(messageValue);
      }
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
}
