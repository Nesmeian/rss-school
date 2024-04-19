import { modalIsAuth } from "../components/modals/loginIsAuth/loginIsAuth";
import { Footer } from "../view/footer/footer";
import { Header } from "../view/header/header";

let socket: WebSocket | null = null;

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
    const main = document.querySelector(".main");
    const app = document.getElementById("app");
    const header = new Header().buildHeader();
    const modalIsAuthorizate = new modalIsAuth().buildModal();
    const footer = new Footer().buildFooter();
    if (!message.payload.error) {
      app?.remove();
      if (!document.querySelector("header")) {
        body?.insertAdjacentElement("afterbegin", header);
      }
      if (!document.querySelector("footer")) {
        main?.insertAdjacentElement("beforeend", footer);
      }
      form?.classList.add("auth__form--remove");
      setInterval(() => {
        form?.remove();
      }, 2000);
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
