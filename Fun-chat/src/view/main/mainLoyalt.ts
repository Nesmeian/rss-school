import createElement from "../../utils/createElems";
import { Html } from "../../utils/createElems";
import { AuthForm } from "../../components/authForm";
import "./main.scss";
export class Main {
  main: Html;
  constructor() {
    this.main = this.createMainLoyalt();
  }

  createMainLoyalt(): Html {
    const authForm = new AuthForm().collectForm();
    const mainWrapper = this.createWrapper();
    const main = this.createMain();
    main.append(mainWrapper);
    mainWrapper.append(authForm);
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
