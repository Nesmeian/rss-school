import createElement, { Html } from "../../utils/createElems";
import "./header.scss";
export class Header {
  buildHeader(): Html {
    const header = this.createHeader();
    const wrapper = this.createWrapper();
    const logo = this.createLogo();
    const title = this.createTitle();
    const about = this.createAbout();
    const logOut = this.createLogout();
    header.append(wrapper);
    wrapper.append(logo);
    wrapper.append(title);
    wrapper.append(about);
    wrapper.append(logOut);
    return header;
  }
  createHeader(): Html {
    const param = {
      tag: "header",
      classes: ["header"],
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
    const param = {
      tag: "div",
      classes: ["header__logo"],
    };
    const img = new createElement(param).getElement();
    return img;
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
    return button;
  }
  createAbout(): Html {
    const param = {
      tag: "button",
      classes: ["header__log-out_btn", "header__btn", "button"],
      text: "About",
    };
    const button = new createElement(param).getElement();
    button.setAttribute("type", "button");
    return button;
  }
}
