import { AuthForm } from "../components/auth/authForm";
import { modalIsAuth } from "../components/modals/loginIsAuth/loginIsAuth";
import { Chat } from "../view/chat/chat";
import { Footer } from "../view/footer/footer";
import { Header } from "../view/header/header";

export const socket: WebSocket | null = new WebSocket("ws://127.0.0.1:4000");
socket.onopen = function () {
  if (sessionStorage.getItem("Login")) {
    sendLoginWhenReload();
  }
};
socket.onmessage = function (e) {
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

  if (
    message.type === "USER_EXTERNAL_LOGIN" ||
    message.type === "USER_EXTERNAL_LOGOUT" ||
    message.type === "USER_LOGIN"
  ) {
    const idGenerator = new AuthForm().idGenerator();
    const idGenerator2 = new AuthForm().idGenerator();
    const userInactive = JSON.stringify({
      id: idGenerator,
      type: "USER_INACTIVE",
      payload: null,
    });
    const userActive = JSON.stringify({
      id: idGenerator2,
      type: "USER_ACTIVE",
      payload: null,
    });
    socket.send(userActive);
    socket.send(userInactive);
  }
};

export function login(username: string): void {
  if (socket?.readyState) {
    socket.addEventListener("message", function (event) {
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
          body?.insertAdjacentElement("afterbegin", header);
          mainWrapper?.insertAdjacentElement("afterbegin", chat);
          setTimeout(() => {
            header.classList.remove("header--inactive"),
              chat.classList.remove("chat--inactive");
          }, 500);
        }
        if (!document.querySelector("footer")) {
          body?.insertAdjacentElement("beforeend", footer);
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
    });
    socket.send(username);
    if (!sessionStorage.getItem("Login")) {
      sesionLogin();
    }
  }
}
export function logOutServer(): void {
  if (socket?.readyState) {
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
}
// export async function createListOfUsers(): Promise<string[]> {
//   return new Promise((resolve) => {
//     if (socket?.readyState) {
//       const a = JSON.stringify({
//         id: "1",
//         type: "USER_ACTIVE",
//         payload: null,
//       });
//       socket.send(a);
//       socket.onmessage = (e) => {
//         try {
//           const message = JSON.parse(e.data);
//           if (message.type === "USER_ACTIVE") {
//             const activeUsers = message.payload.users;
//             resolve(activeUsers);
//           }
//         } catch (e) {
//           console.log(e);
//         }
//       };
//     }
//   });
// }
export function createListOfUsers(message: string[], classes: string): void {
  const userlist = document.querySelector(".users__list");
  if (userlist) {
    new Chat().addItemToList(userlist, message, classes);
  }
}

export function sendLoginWhenReload(): void {
  const body = document.querySelector("body");
  const footer = new Footer().buildFooter();
  const header = new Header().buildHeader();
  const loginSession = JSON.parse(sessionStorage.getItem("Login") ?? "{}");
  const loginSes = JSON.stringify({
    id: `${loginSession.id}`,
    type: "USER_LOGIN",
    payload: {
      user: {
        login: `${loginSession?.login}`,
        password: `${loginSession?.password}`,
      },
    },
  });

  body?.insertAdjacentElement("afterbegin", header);
  body?.append(footer);
  setTimeout(() => {
    header.classList.remove("header--inactive");
    footer.classList.remove("footer--inactive");
  }, 100);
  login(loginSes);
}

export function sesionLogin(): void {
  if (socket?.readyState) {
    if (sessionStorage.getItem("Login")) {
      const sesion = JSON.parse(sessionStorage.getItem("Login") ?? "{}");
      const authorization = JSON.stringify({
        id: `${sesion.id}`,
        type: "USER_LOGIN",
        payload: {
          user: {
            login: `${sesion.login}`,
            password: `${sesion.password}`,
          },
        },
      });
      socket.send(authorization);
    }
  }
}
