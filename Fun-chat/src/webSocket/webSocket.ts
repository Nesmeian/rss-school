import { modalIsAuth } from "../components/modals/loginIsAuth/loginIsAuth";
import { Chat } from "../view/chat/chat";
import { Footer } from "../view/footer/footer";
import { Header } from "../view/header/header";
export let socket: WebSocket | null = null;
export function connectServer(): { getSocket: () => WebSocket } {
  socket = new WebSocket("ws://127.0.0.1:4000");
  if (socket instanceof WebSocket) {
    return {
      getSocket: () => socket,
    };
  }
}

export function login(username: string): void {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    console.error("WebSocket connection is not established or is not open.");
    return;
  }

  socket.send(username);

  socket.onmessage = (event) => {
    const form = document.querySelector(".auth__form");
    const message = JSON.parse(event.data);
    const body = document.querySelector("body");
    const mainWrapper = document.querySelector(".wrapper");
    const header = new Header().buildHeader();
    const modalIsAuthorizate = new modalIsAuth().buildModal();
    const footer = new Footer().buildFooter();
    const chat = new Chat().buildChat();
    if (!message.payload.error) {
      if (!document.querySelector("header")) {
        setTimeout(() => {
          body?.insertAdjacentElement("afterbegin", header);
          mainWrapper?.insertAdjacentElement("afterbegin", chat);
        }, 400);
        setTimeout(() => {
          header.classList.remove("header--inactive"),
            chat.classList.remove("chat--inactive");
        }, 500);
      }
      if (!document.querySelector("footer")) {
        setTimeout(() => {
          body?.insertAdjacentElement("beforeend", footer);
        }, 400);
        setTimeout(() => footer.classList.remove("footer--inactive"), 500);
      }
      form?.classList.add("auth__form--remove");
      setInterval(() => {
        form?.remove();
      }, 500);
    } else {
      if (body?.querySelector(".is-auth__wrapper")) {
        throw new Error("this modal is already appear");
      } else {
        body?.insertAdjacentElement("afterbegin", modalIsAuthorizate);
        setTimeout(
          () => modalIsAuthorizate?.classList.add("is-auth__wrapper--active"),
          100
        );
      }
    }
  };
}
export function logOutServer(): void {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    console.error("WebSocket connection is not established or is not open.");
    return;
  }
  const sesionLogin = JSON.parse(sessionStorage.getItem("Login") ?? "{}");
  const login = JSON.stringify({
    id: sesionLogin.id,
    type: "USER_LOGOUT",
    payload: {
      user: {
        login: sesionLogin.login,
        password: sesionLogin.password,
      },
    },
  });
  socket.send(login);
}
export function createListOfUsers(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      console.error("WebSocket connection is not established or is not open.");
      reject();
    }

    let user;
    const a = JSON.stringify({
      id: "1",
      type: "USER_ACTIVE",
      payload: null,
    });
    if (socket) {
      socket.send(a);

      socket.onmessage = (e) => {
        const users = JSON.parse(e.data);
        user = users.payload.users;
        resolve(user);
      };
    } else {
      reject();
    }
  });
}
