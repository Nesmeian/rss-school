import createElement, { Html } from "../../../utils/createElems";
import "./loginIsAuth.scss";

export class modalIsAuth {
  buildModal(): Html {
    const wrapper = this.createModalWrapper();
    const modal = this.createModal();
    const message = this.createMessage();
    const button = this.createButton();
    wrapper.append(modal);
    modal.append(message);
    modal.append(button);
    return wrapper;
  }
  createModalWrapper(): Html {
    const param = {
      tag: "div",
      classes: ["is-auth__wrapper"],
    };
    return new createElement(param).getElement();
  }
  createModal(): Html {
    const param = {
      tag: "div",
      classes: ["is-auth__modal"],
    };
    return new createElement(param).getElement();
  }
  createMessage(): Html {
    const param = {
      tag: "div",
      classes: ["is-auth__modal__message"],
      text: "This user is already logined!",
    };
    return new createElement(param).getElement();
  }
  createButton(): Html {
    const param = {
      tag: "button",
      classes: ["is-auth__modal__btn", "button"],
      text: "Close",
    };
    const button = new createElement(param).getElement();
    button.setAttribute("type", "button");
    button.addEventListener("click", () => {
      const wrapper = document.querySelector(".is-auth__wrapper");
      wrapper?.classList.remove("is-auth__wrapper--active");
      setTimeout(() => {
        wrapper?.remove();
      }, 700);
    });
    return button;
  }
}
