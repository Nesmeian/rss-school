import createElement, { Html } from "../../../utils/createElems";
import "./about.scss";
export class AboutModal {
  buildAbout(): Html {
    const about = this.createAboutModal();
    const wrapper = this.createWrapper();
    const text = this.createText();
    const closBtn = this.createCloseBtn();
    const link = this.createAuthorLink();
    about.append(wrapper);
    wrapper.append(text);
    wrapper.append(link);
    wrapper.append(closBtn);
    return about;
  }
  createAboutModal(): Html {
    const param = {
      tag: "div",
      classes: ["about", "about--inactive"],
    };
    return new createElement(param).getElement();
  }
  createWrapper(): Html {
    const param = {
      tag: "div",
      classes: ["about__wrapper"],
    };
    return new createElement(param).getElement();
  }
  createText(): Html {
    const param = {
      tag: "div",
      classes: ["about__text"],
      text: "I hope this application give you a lot of fun ;)\n This is must dificult app what i ever make so,if you find bugs please text me;)",
    };
    return new createElement(param).getElement();
  }
  createAuthorLink(): Html {
    const param = {
      tag: "a",
      classes: ["about__author-link"],
    };
    const author = this.createAuthor();
    const result = new createElement(param).getElement();
    result.setAttribute("href", "https://github.com/Nesmeian");
    result.append(author);
    return result;
  }
  createAuthor(): Html {
    const param = {
      tag: "div",
      classes: ["about__author"],
      text: "Nesmeian",
    };
    return new createElement(param).getElement();
  }
  createCloseBtn(): Html {
    const param = {
      tag: "button",
      classes: ["about__close-btn", "button"],
      text: "Close",
    };
    const button = new createElement(param).getElement();
    button.addEventListener("click", () => {
      const about = document.querySelector(".about");
      about?.classList.add("about--inactive");
      setTimeout(() => {
        about?.remove();
      }, 1000);
    });
    return button;
  }
}
