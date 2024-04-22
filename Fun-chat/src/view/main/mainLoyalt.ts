import createElement from "../../utils/createElems";
import { Html } from "../../utils/createElems";
import { AuthForm } from "../../components/auth/authForm";
import "./main.scss";
import { Chat } from "../chat/chat";
export class Main {
  main: Html;
  constructor() {
    this.main = this.createMainLoyalt();
  }

  createMainLoyalt(): Html {
    const app = document.getElementById("app");
    app?.remove();
    const authForm = new AuthForm().collectForm();
    const mainWrapper = this.createWrapper();
    const main = this.createMain();
    const chat = new Chat().buildChat();

    main.append(mainWrapper);
    if (sessionStorage.getItem("Login")) {
      chat.classList.remove("chat--inactive");
      mainWrapper.append(chat);
    } else if (!sessionStorage.getItem("Login")) {
      mainWrapper.append(authForm);
    }
    return main;
  }
  createWrapper(): Html {
    const param = {
      tag: "div",
      classes: ["wrapper"],
    };
    return new createElement(param).getElement();
  }
  createMain(): Html {
    const param = {
      tag: "main",
      classes: ["main"],
    };
    return new createElement(param).getElement();
  }
}
