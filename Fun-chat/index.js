var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
class createElement {
  constructor(param) {
    __publicField(this, "element");
    this.element = this.createElement(param);
  }
  getElement() {
    return this.element;
  }
  createElement(param) {
    const element = document.createElement(param.tag || "");
    this.setCssClasses(element, param.classes || [""]);
    this.setTextContent(element, param.text || "");
    return element;
  }
  setCssClasses(element, cssClasses) {
    cssClasses.forEach((className) => element.classList.add(className));
  }
  setTextContent(element, text) {
    element.textContent = text;
  }
}
class modalIsAuth {
  buildModal() {
    const wrapper = this.createModalWrapper();
    const modal = this.createModal();
    const message = this.createMessage();
    const button = this.createButton();
    wrapper.append(modal);
    modal.append(message);
    modal.append(button);
    return wrapper;
  }
  createModalWrapper() {
    const param = {
      tag: "div",
      classes: ["is-auth__wrapper"]
    };
    return new createElement(param).getElement();
  }
  createModal() {
    const param = {
      tag: "div",
      classes: ["is-auth__modal"]
    };
    return new createElement(param).getElement();
  }
  createMessage() {
    const param = {
      tag: "div",
      classes: ["is-auth__modal__message"],
      text: "This user is already logined!"
    };
    return new createElement(param).getElement();
  }
  createButton() {
    const param = {
      tag: "button",
      classes: ["is-auth__modal__btn", "button"],
      text: "Close"
    };
    const button = new createElement(param).getElement();
    button.setAttribute("type", "button");
    button.addEventListener("click", () => {
      const wrapper = document.querySelector(".is-auth__wrapper");
      wrapper == null ? void 0 : wrapper.classList.remove("is-auth__wrapper--active");
      setTimeout(() => {
        wrapper == null ? void 0 : wrapper.remove();
      }, 700);
    });
    return button;
  }
}
class Chat {
  buildChat() {
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
    this.selectUser();
    return chat;
  }
  createChat() {
    const param = {
      tag: "div",
      classes: ["chat", "chat--inactive"]
    };
    return new createElement(param).getElement();
  }
  createChatWrapper() {
    const param = {
      tag: "div",
      classes: ["chat__wrapper"]
    };
    return new createElement(param).getElement();
  }
  createUserInfContainer() {
    const param = {
      tag: "div",
      classes: ["chat__user-container"]
    };
    return new createElement(param).getElement();
  }
  createUser() {
    const param = {
      tag: "div",
      classes: ["user-container__user"]
    };
    return new createElement(param).getElement();
  }
  createUserCondition() {
    const param = {
      tag: "div",
      classes: ["user-container__user-condition"]
    };
    return new createElement(param).getElement();
  }
  createChatWindow() {
    const param = {
      tag: "div",
      classes: ["user-container__window"]
    };
    return new createElement(param).getElement();
  }
  createChatMessageContainer() {
    const param = {
      tag: "div",
      classes: ["user__container-message"]
    };
    return new createElement(param).getElement();
  }
  createChatMessageInput() {
    const param = {
      tag: "input",
      classes: ["container-message__input"]
    };
    const result = new createElement(param).getElement();
    result.setAttribute("type", "text");
    return result;
  }
  createChatMessageButton() {
    const param = {
      tag: "button",
      classes: ["container-message__button", "button"],
      text: "send"
    };
    const result = new createElement(param).getElement();
    result.setAttribute("type", "button");
    result.addEventListener("click", () => {
      this.sendMessage();
    });
    return result;
  }
  createUsers() {
    const param = {
      tag: "div",
      classes: ["users__container"]
    };
    const result = new createElement(param).getElement();
    return result;
  }
  createUsersSearch() {
    const param = {
      tag: "input",
      classes: ["users__search"]
    };
    const result = new createElement(param).getElement();
    result.setAttribute("type", "text");
    result.addEventListener("input", () => {
      this.searchUser(result.value);
    });
    return result;
  }
  createUsersList() {
    const param = {
      tag: "div",
      classes: ["users__list"]
    };
    const result = new createElement(param).getElement();
    return result;
  }
  createAllUsers() {
    const param = {
      tag: "div",
      classes: ["users__item"]
    };
    return new createElement(param).getElement();
  }
  addItemToList(list, user, classes) {
    const currentLogin = JSON.parse(sessionStorage.getItem("Login") ?? "{}");
    user.forEach((e) => {
      const user2 = this.createAllUsers();
      if (currentLogin.login !== e.login) {
        if (classes === "active") {
          user2.classList.add("--active");
        } else {
          user2.classList.add("--inactive");
        }
        user2.textContent = e.login;
        list.append(user2);
      }
    });
  }
  searchUser(value) {
    const users = document.querySelectorAll(".users__item");
    users.forEach((user) => {
      var _a;
      value = value.toLowerCase();
      const userText = ((_a = user.textContent) == null ? void 0 : _a.toLowerCase()) || "";
      if (!userText.includes(value)) {
        user.style.display = "none";
      } else {
        user.style.display = "flex";
      }
    });
  }
  selectUser() {
    const users = document.querySelectorAll(".users__item");
    const userName = document.querySelector(
      ".user-container__user"
    );
    const condition = document.querySelector(
      ".user-container__user-condition"
    );
    if (userName && condition) {
      users.forEach((e) => {
        e.addEventListener("click", () => {
          userName.textContent = `User: ${e.textContent}`;
          if (e.classList.contains("--active")) {
            condition.textContent = "Online";
          } else {
            condition.textContent = "Offline";
          }
        });
      });
    }
  }
  sendMessage() {
    const name = document.querySelector(".user-container__user");
    const messageValue = document.querySelector(
      ".container-message__input"
    );
    if ((name == null ? void 0 : name.textContent) != "") {
      let result = name == null ? void 0 : name.textContent;
      result = result == null ? void 0 : result.replace(/^User: /, "");
      const message = JSON.stringify({
        id: new AuthForm().idGenerator(),
        type: "MSG_SEND",
        payload: {
          message: {
            to: result,
            text: messageValue == null ? void 0 : messageValue.value
          }
        }
      });
      socket == null ? void 0 : socket.send(message);
      if (messageValue) {
        messageValue.value = "";
      }
    } else {
      console.log(5);
    }
  }
}
class Footer {
  buildFooter() {
    const footer = this.createFooter();
    const wrapper = this.createWrapper();
    const logo = this.createLinkLogo();
    const year = this.createYear();
    const gitHub = this.createLinkGithub();
    footer.append(wrapper);
    wrapper.append(logo);
    wrapper.append(year);
    wrapper.append(gitHub);
    return footer;
  }
  createFooter() {
    const param = {
      tag: "footer",
      classes: ["footer", "footer--inactive"]
    };
    return new createElement(param).getElement();
  }
  createWrapper() {
    const param = {
      tag: "div",
      classes: ["footer__wrapper"]
    };
    return new createElement(param).getElement();
  }
  createLogo() {
    const param = {
      tag: "div",
      classes: ["footer__logo"]
    };
    const img = new createElement(param).getElement();
    return img;
  }
  createLinkLogo() {
    const param = {
      tag: "a",
      classes: ["footer__git-hub_link", "link"]
    };
    const a = new createElement(param).getElement();
    const logo = this.createLogo();
    a.setAttribute("href", "https://rs.school/");
    a.append(logo);
    return a;
  }
  createYear() {
    const param = {
      tag: "div",
      classes: ["footer__year"],
      text: "2024"
    };
    const button = new createElement(param).getElement();
    button.setAttribute("type", "button");
    return button;
  }
  createGitHub() {
    const param = {
      tag: "div",
      classes: ["footer__git-hub"],
      text: "Nesmeian"
    };
    const result = new createElement(param).getElement();
    result.setAttribute("type", "button");
    return result;
  }
  createLinkGithub() {
    const param = {
      tag: "a",
      classes: ["footer__git-hub_link", "link"]
    };
    const a = new createElement(param).getElement();
    const gitHub = this.createGitHub();
    a.setAttribute("href", "https://github.com/Nesmeian");
    a.append(gitHub);
    return a;
  }
}
class Header {
  buildHeader() {
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
  createHeader() {
    const param = {
      tag: "header",
      classes: ["header", "header--inactive"]
    };
    return new createElement(param).getElement();
  }
  createWrapper() {
    const param = {
      tag: "div",
      classes: ["header__wrapper"]
    };
    return new createElement(param).getElement();
  }
  createLogo() {
    var _a;
    const name = (_a = JSON.parse(
      sessionStorage.getItem("Login") ?? "{}"
    )) == null ? void 0 : _a.login;
    const param = {
      tag: "div",
      classes: ["header__logo"],
      text: `User: ${name}`
    };
    return new createElement(param).getElement();
  }
  createTitle() {
    const param = {
      tag: "h1",
      classes: ["header__Title"],
      text: "Fun Chat"
    };
    return new createElement(param).getElement();
  }
  createLogout() {
    const param = {
      tag: "button",
      classes: ["header__log-out_btn", "header__btn", "button"],
      text: "Log out"
    };
    const button = new createElement(param).getElement();
    button.setAttribute("type", "button");
    button.addEventListener("click", this.logOut);
    return button;
  }
  logOut() {
    logOutServer();
    sessionStorage.removeItem("Login");
    const mainWrapper = document.querySelector(".wrapper");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const chat = document.querySelector(".chat");
    const authForm = new AuthForm().collectForm();
    authForm.classList.add("auth__form--remove");
    header == null ? void 0 : header.classList.add("header--inactive");
    footer == null ? void 0 : footer.classList.add("footer--inactive");
    chat == null ? void 0 : chat.classList.add("chat--inactive");
    setTimeout(() => {
      header == null ? void 0 : header.remove();
      footer == null ? void 0 : footer.remove();
      chat == null ? void 0 : chat.remove();
      mainWrapper == null ? void 0 : mainWrapper.append(authForm);
    }, 500);
    setTimeout(() => {
      authForm.classList.remove("auth__form--remove");
    }, 600);
  }
}
const socket = new WebSocket("ws://127.0.0.1:4000");
socket.onopen = function() {
  if (sessionStorage.getItem("Login")) {
    sendLoginWhenReload();
  }
};
socket.onmessage = function(e) {
  const message = JSON.parse(e.data);
  const chat = document.querySelector(".users__list");
  if (message.type === "USER_INACTIVE") {
    const inactive = message.payload.users;
    createListOfUsers(inactive, "inactive");
  }
  if (message.type === "USER_ACTIVE") {
    if (chat) {
      chat.innerHTML = "";
    }
    const active = message.payload.users;
    createListOfUsers(active, "active");
  }
  if (message.type === "USER_EXTERNAL_LOGIN" || message.type === "USER_EXTERNAL_LOGOUT" || message.type === "USER_LOGIN") {
    const idGenerator = new AuthForm().idGenerator();
    const idGenerator2 = new AuthForm().idGenerator();
    const userInactive = JSON.stringify({
      id: idGenerator,
      type: "USER_INACTIVE",
      payload: null
    });
    const userActive = JSON.stringify({
      id: idGenerator2,
      type: "USER_ACTIVE",
      payload: null
    });
    socket.send(userActive);
    socket.send(userInactive);
  }
};
function login(username) {
  if (socket == null ? void 0 : socket.readyState) {
    socket.addEventListener("message", function(event) {
      const form = document.querySelector(".auth__form");
      const message = JSON.parse(event.data);
      const error = message.payload.error;
      const body = document.querySelector("body");
      const mainWrapper = document.querySelector(".wrapper");
      const header = new Header().buildHeader();
      const modalIsAuthorizate = new modalIsAuth().buildModal();
      const footer = new Footer().buildFooter();
      const chat = new Chat().buildChat();
      if (!error) {
        if (!document.querySelector("header")) {
          body == null ? void 0 : body.insertAdjacentElement("afterbegin", header);
          mainWrapper == null ? void 0 : mainWrapper.insertAdjacentElement("afterbegin", chat);
          setTimeout(() => {
            header.classList.remove("header--inactive"), chat.classList.remove("chat--inactive");
          }, 500);
        }
        if (!document.querySelector("footer")) {
          body == null ? void 0 : body.insertAdjacentElement("beforeend", footer);
          setTimeout(() => footer.classList.remove("footer--inactive"), 500);
        }
        form == null ? void 0 : form.classList.add("auth__form--remove");
        setInterval(() => {
          form == null ? void 0 : form.remove();
        }, 500);
      } else if (error === "incorrect password" || error === "a user with this login is already authorized") {
        sessionStorage.removeItem("Login");
        if (body == null ? void 0 : body.querySelector(".is-auth__wrapper")) {
          throw new Error("this modal is already appear");
        } else {
          body == null ? void 0 : body.insertAdjacentElement("afterbegin", modalIsAuthorizate);
          const modalText = document.querySelector(".is-auth__modal__message");
          if (modalText) {
            modalText.textContent = error;
          }
          setTimeout(
            () => modalIsAuthorizate == null ? void 0 : modalIsAuthorizate.classList.add("is-auth__wrapper--active"),
            100
          );
        }
      }
    });
    socket.send(username);
    if (!sessionStorage.getItem("Login")) {
      sesionLogin();
    }
  }
}
function logOutServer() {
  if (socket == null ? void 0 : socket.readyState) {
    const sesionLogin2 = JSON.parse(sessionStorage.getItem("Login") ?? "{}");
    const login2 = JSON.stringify({
      id: sesionLogin2.id,
      type: "USER_LOGOUT",
      payload: {
        user: {
          login: sesionLogin2.login,
          password: sesionLogin2.password
        }
      }
    });
    socket.send(login2);
  }
}
function createListOfUsers(message, classes) {
  const userlist = document.querySelector(".users__list");
  if (userlist) {
    new Chat().addItemToList(userlist, message, classes);
  }
}
function sendLoginWhenReload() {
  const body = document.querySelector("body");
  const footer = new Footer().buildFooter();
  const header = new Header().buildHeader();
  const loginSession = JSON.parse(sessionStorage.getItem("Login") ?? "{}");
  const loginSes = JSON.stringify({
    id: `${loginSession.id}`,
    type: "USER_LOGIN",
    payload: {
      user: {
        login: `${loginSession == null ? void 0 : loginSession.login}`,
        password: `${loginSession == null ? void 0 : loginSession.password}`
      }
    }
  });
  body == null ? void 0 : body.insertAdjacentElement("afterbegin", header);
  body == null ? void 0 : body.append(footer);
  setTimeout(() => {
    header.classList.remove("header--inactive");
    footer.classList.remove("footer--inactive");
  }, 100);
  login(loginSes);
}
function sesionLogin() {
  if (socket == null ? void 0 : socket.readyState) {
    if (sessionStorage.getItem("Login")) {
      const sesion = JSON.parse(sessionStorage.getItem("Login") ?? "{}");
      const authorization = JSON.stringify({
        id: `${sesion.id}`,
        type: "USER_LOGIN",
        payload: {
          user: {
            login: `${sesion.login}`,
            password: `${sesion.password}`
          }
        }
      });
      socket.send(authorization);
    }
  }
}
class AboutModal {
  buildAbout() {
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
  createAboutModal() {
    const param = {
      tag: "div",
      classes: ["about", "about--inactive"]
    };
    return new createElement(param).getElement();
  }
  createWrapper() {
    const param = {
      tag: "div",
      classes: ["about__wrapper"]
    };
    return new createElement(param).getElement();
  }
  createText() {
    const param = {
      tag: "div",
      classes: ["about__text"],
      text: "I hope this application give you a lot of fun ;)\n This is must dificult app what i ever make so,if you find bugs please text me;)"
    };
    return new createElement(param).getElement();
  }
  createAuthorLink() {
    const param = {
      tag: "a",
      classes: ["about__author-link"]
    };
    const author = this.createAuthor();
    const result = new createElement(param).getElement();
    result.setAttribute("href", "https://github.com/Nesmeian");
    result.append(author);
    return result;
  }
  createAuthor() {
    const param = {
      tag: "div",
      classes: ["about__author"],
      text: "Nesmeian"
    };
    return new createElement(param).getElement();
  }
  createCloseBtn() {
    const param = {
      tag: "button",
      classes: ["about__close-btn", "button"],
      text: "Close"
    };
    const button = new createElement(param).getElement();
    button.addEventListener("click", () => {
      const about = document.querySelector(".about");
      about == null ? void 0 : about.classList.add("about--inactive");
      setTimeout(() => {
        about == null ? void 0 : about.remove();
      }, 1e3);
    });
    return button;
  }
}
class AuthForm {
  constructor() {
    __publicField(this, "conditionLogin");
    __publicField(this, "conditionPassword");
    this.conditionLogin = false;
    this.conditionPassword = false;
  }
  collectForm() {
    const form = this.createForm();
    const login2 = this.createInputLogWrapper();
    const password = this.createInputPassWrapper();
    const button = this.createButton();
    const aboutBtn = this.createAboutBtn();
    form.append(login2);
    form.append(password);
    form.append(button);
    form.append(aboutBtn);
    return form;
  }
  createForm() {
    const param = {
      tag: "form",
      classes: ["auth__form", "form"]
    };
    return new createElement(param).getElement();
  }
  createInputLogWrapper() {
    const param = {
      tag: "div",
      classes: ["auth__wrapper-login", "auth__input-wrapper"]
    };
    const wrapper = new createElement(param).getElement();
    const label = this.createLabelLogin();
    wrapper.append(label);
    return wrapper;
  }
  createLabelLogin() {
    const param = {
      tag: "label",
      classes: ["auth__label", "label"],
      text: "Login"
    };
    const lable = new createElement(param).getElement();
    const input = this.createInputLogin();
    lable.append(input);
    return lable;
  }
  createInputLogin() {
    const param = {
      tag: "input",
      classes: ["auth__input-login", "input"]
    };
    const login2 = new createElement(param).getElement();
    login2.setAttribute("type", "text");
    login2.addEventListener("focus", () => {
    });
    login2.addEventListener("blur", () => {
      const wrapper = document.querySelector(".auth__wrapper-login");
      this.validation(login2, "Login", wrapper);
    });
    return login2;
  }
  createInputPassWrapper() {
    const param = {
      tag: "div",
      classes: ["auth__wrapper-password", "auth__input-wrapper"]
    };
    const wrapper = new createElement(param).getElement();
    const label = this.createLabelPassword();
    wrapper.append(label);
    return wrapper;
  }
  createLabelPassword() {
    const param = {
      tag: "label",
      classes: ["auth__label", "label"],
      text: "Password"
    };
    const lable = new createElement(param).getElement();
    const input = this.createInputPassword();
    lable.append(input);
    return lable;
  }
  createInputPassword() {
    const param = {
      tag: "input",
      classes: ["auth__input-password", "input"]
    };
    const password = new createElement(param).getElement();
    password.setAttribute("type", "text");
    password.addEventListener("blur", () => {
      const wrapper = document.querySelector(".auth__wrapper-password");
      this.validation(password, "Password", wrapper);
    });
    return password;
  }
  createButton() {
    const param = {
      tag: "button",
      classes: ["auth__button", "button"],
      text: "Submit"
    };
    const button = new createElement(param).getElement();
    button.setAttribute("type", "button");
    button == null ? void 0 : button.setAttribute("disabled", "true");
    button.addEventListener("click", () => {
      const loginValue = document.querySelector(".auth__input-login");
      const PasswordValue = document.querySelector(
        ".auth__input-password"
      );
      const authorization = JSON.stringify({
        id: `${this.idGenerator()}`,
        type: "USER_LOGIN",
        payload: {
          user: {
            login: `${loginValue == null ? void 0 : loginValue.value}`,
            password: `${PasswordValue == null ? void 0 : PasswordValue.value}`
          }
        }
      });
      const loginSession = {
        login: `${loginValue == null ? void 0 : loginValue.value}`,
        password: `${PasswordValue == null ? void 0 : PasswordValue.value}`,
        id: `${this.idGenerator()}`
      };
      sessionStorage.setItem("Login", JSON.stringify(loginSession));
      login(authorization);
    });
    this.pressEnter();
    return button;
  }
  createAboutBtn() {
    const param = {
      tag: "button",
      classes: ["auth__log-out_btn", "auth__btn", "button"],
      text: "About"
    };
    const button = new createElement(param).getElement();
    button.setAttribute("type", "button");
    const aboutModal = new AboutModal().buildAbout();
    const body = document.querySelector("body");
    button.addEventListener("click", () => {
      body == null ? void 0 : body.insertAdjacentElement("afterbegin", aboutModal);
      setTimeout(() => {
        aboutModal.classList.remove("about--inactive");
      }, 100);
    });
    return button;
  }
  validation(input, purpose, wrapper) {
    const minLength = 4;
    const button = document.querySelector(".auth__button");
    if (input instanceof HTMLInputElement) {
      if (this.conditionLogin) {
        if (purpose === "Login") {
          this.conditionLogin = false;
        } else if (purpose === "Password") {
          this.conditionPassword = false;
        }
      }
      const inputVal = input.value.split("");
      const message = wrapper;
      const messageValue = this.validationMessage();
      if (inputVal.length > 0) {
        if (inputVal[0] !== inputVal[0].toUpperCase()) {
          messageValue.innerHTML += `The ${purpose} must start with a capital letter <br>`;
        }
        if (inputVal.length < minLength) {
          messageValue.innerHTML += `The ${purpose} must be longer than 4 <br>`;
        }
      }
      if (inputVal.length === 0) {
        messageValue.textContent += `Please add your ${purpose}`;
      }
      if (inputVal.length > minLength && inputVal.length !== 0 && inputVal[0] == inputVal[0].toUpperCase()) {
        if (purpose === "Login") {
          this.conditionLogin = true;
        } else if (purpose === "Password") {
          this.conditionPassword = true;
        }
      }
      if (!this.conditionLogin || !this.conditionPassword) {
        button == null ? void 0 : button.setAttribute("disabled", "true");
      }
      this.validationMessageDelete(wrapper);
      message == null ? void 0 : message.append(messageValue);
    }
    if (this.conditionLogin && this.conditionPassword) {
      console.log(this.conditionLogin, this.conditionPassword);
      button == null ? void 0 : button.removeAttribute("disabled");
    }
  }
  validationMessage() {
    const param = {
      tag: "div",
      classes: ["auth__message", "message"]
    };
    return new createElement(param).getElement();
  }
  validationMessageDelete(wrapper) {
    if (wrapper) {
      const message = wrapper.querySelectorAll(".auth__message");
      message.forEach((e) => {
        e.remove();
      });
    }
  }
  idGenerator() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }
  pressEnter() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 13 && this.conditionLogin && this.conditionPassword) {
        const loginValue = document.querySelector(".auth__input-login");
        const PasswordValue = document.querySelector(
          ".auth__input-password"
        );
        const authorization = JSON.stringify({
          id: `${this.idGenerator()}`,
          type: "USER_LOGIN",
          payload: {
            user: {
              login: `${loginValue == null ? void 0 : loginValue.value}`,
              password: `${PasswordValue == null ? void 0 : PasswordValue.value}`
            }
          }
        });
        login(authorization);
      }
    });
  }
}
class Main {
  constructor() {
    __publicField(this, "main");
    this.main = this.createMainLoyalt();
  }
  createMainLoyalt() {
    const app = document.getElementById("app");
    app == null ? void 0 : app.remove();
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
  createWrapper() {
    const param = {
      tag: "div",
      classes: ["wrapper"]
    };
    return new createElement(param).getElement();
  }
  createMain() {
    const param = {
      tag: "main",
      classes: ["main"]
    };
    return new createElement(param).getElement();
  }
}
class App {
  constructor() {
    this.addMain();
  }
  addMain() {
    const header = new Header().buildHeader();
    const footer = new Footer().buildFooter();
    header.classList.remove("header--inactive");
    footer.classList.remove("footer--inactive");
    const body = document.querySelector("body");
    const main = new Main().createMainLoyalt();
    if (document.querySelector(".chat")) {
      body == null ? void 0 : body.classList.add("body--app");
    }
    body == null ? void 0 : body.append(main);
  }
}
new App();
//# sourceMappingURL=index.js.map
