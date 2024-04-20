import createElement, { Html } from "../../utils/createElems";
import { createListOfUsers } from "../../webSocket/webSocket";
import "./chat.scss";

export class Chat {
  buildChat(): Html {
    const chat = this.createChat();
    const wrapper = this.createChatWrapper();
    const infContainer = this.createUserInfContainer();
    const user = this.createUser();
    const userCondition = this.createUserCondition();
    const window = this.createChatWindow();
    const messageContainer = this.createChatMessageContainer();
    const messageInput = this.createChatMessageInput();
    const button = this.createChatMessageButton();
    const users = this.createUsers();
    const usersSearch = this.createUsersSearch();
    const usersList = this.createUsersList();
    chat.append(users);
    users.append(usersSearch);
    users.append(usersList);
    chat.append(wrapper);
    wrapper.append(infContainer);
    infContainer.append(user);
    infContainer.append(userCondition);
    wrapper.append(window);
    wrapper.append(messageContainer);
    messageContainer.append(messageInput);
    messageContainer.append(button);
    return chat;
  }
  createChat(): Html {
    const param = {
      tag: "div",
      classes: ["chat", "chat--inactive"],
    };
    return new createElement(param).getElement();
  }
  createChatWrapper(): Html {
    const param = {
      tag: "div",
      classes: ["chat__wrapper"],
    };
    return new createElement(param).getElement();
  }
  createUserInfContainer(): Html {
    const param = {
      tag: "div",
      classes: ["chat__user-container"],
    };
    return new createElement(param).getElement();
  }
  createUser(): Html {
    const param = {
      tag: "div",
      classes: ["user-container__user"],
      text: `User:`,
    };
    return new createElement(param).getElement();
  }
  createUserCondition(): Html {
    const param = {
      tag: "div",
      classes: ["user-container__user-condition"],
      text: "Offlaine",
    };
    return new createElement(param).getElement();
  }
  createChatWindow(): Html {
    const param = {
      tag: "div",
      classes: ["user-container__window"],
    };
    return new createElement(param).getElement();
  }
  createChatMessageContainer(): Html {
    const param = {
      tag: "div",
      classes: ["user__container-message"],
    };
    return new createElement(param).getElement();
  }
  createChatMessageInput(): Html {
    const param = {
      tag: "input",
      classes: ["container-message__input"],
    };
    const result = new createElement(param).getElement();
    result.setAttribute("type", "text");
    return result;
  }
  createChatMessageButton(): Html {
    const param = {
      tag: "button",
      classes: ["container-message__button"],
      text: "send",
    };
    const result = new createElement(param).getElement();
    result.setAttribute("type", "button");

    return result;
  }

  createUsers(): Html {
    const param = {
      tag: "div",
      classes: ["users__container"],
    };
    const result = new createElement(param).getElement();
    return result;
  }
  createUsersSearch(): Html {
    const param = {
      tag: "input",
      classes: ["users__search"],
    };
    const result = new createElement(param).getElement();
    result.setAttribute("type", "text");
    return result;
  }
  createUsersList(): Html {
    const param = {
      tag: "div",
      classes: ["users__list"],
    };
    const result = new createElement(param).getElement();
    this.addItemToList(result);
    return result;
  }
  createAllUsers(): Html {
    const param = {
      tag: "div",
      classes: ["users__item"],
    };
    return new createElement(param).getElement();
  }
  addItemToList(list: Html): void {
    const currentLogin = JSON.parse(sessionStorage.getItem("Login") ?? "{}");
    const users = createListOfUsers();
    users.then((elem) => {
      elem.forEach((e) => {
        const user = this.createAllUsers();
        if (currentLogin.login !== e.login) {
          user.textContent = e.login;
          list.append(user);
        }
      });
    });
  }
}
