import { AuthForm } from "../../components/auth/authForm";
import createElement, { Html } from "../../utils/createElems";
import { logOutServer } from "../../webSocket/webSocket";
import "./header.scss";
export class Header {
  buildHeader(): Html {
    const header = this.createHeader();
    const wrapper = this.createWrapper();
    const logo = this.createLogo();
    const title = this.createTitle();
    const logOut = this.createLogout();
    header.append(wrapper);
    wrapper.append(logo);
    wrapper.append(title);
    wrapper.append(logOut);

    return header;
  }
  createHeader(): Html {
    const param = {
      tag: "header",
      classes: ["header", "header--inactive"],
    };
    return new createElement(param).getElement();
  }
  createWrapper(): Html {
    const param = {
      tag: "div",
      classes: ["header__wrapper"],
    };
    return new createElement(param).getElement();
  }
  createLogo(): Html {
    const name: string | null = JSON.parse(
      sessionStorage.getItem("Login") ?? "{}"
    )?.login;
    const param = {
      tag: "div",
      classes: ["header__logo"],
      text: `User: ${name}`,
    };
    return new createElement(param).getElement();
  }
  createTitle(): Html {
    const param = {
      tag: "h1",
      classes: ["header__Title"],
      text: "Fun Chat",
    };
    return new createElement(param).getElement();
  }
  createLogout(): Html {
    const param = {
      tag: "button",
      classes: ["header__log-out_btn", "header__btn", "button"],
      text: "Log out",
    };
    const button = new createElement(param).getElement();
    button.setAttribute("type", "button");
    button.addEventListener("click", this.logOut);
    return button;
  }
  logOut(): void {
    logOutServer();
    sessionStorage.removeItem("Login");
    const mainWrapper = document.querySelector(".wrapper");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const chat = document.querySelector(".chat");
    const authForm = new AuthForm().collectForm();
    authForm.classList.add("auth__form--remove");
    header?.classList.add("header--inactive");
    footer?.classList.add("footer--inactive");
    chat?.classList.add("chat--inactive");
    setTimeout(() => {
      header?.remove();
      footer?.remove();
      chat?.remove();
      mainWrapper?.append(authForm);
    }, 500);
    setTimeout(() => {
      authForm.classList.remove("auth__form--remove");
    }, 600);
  }
}
