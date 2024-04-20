import { Main } from "../view/main/mainLoyalt";
import "../components/buttons/button.scss";
import "../components/links/links.scss";
import { Header } from "../view/header/header";
import { Footer } from "../view/footer/footer";
import { connectServer, login } from "../webSocket/webSocket";
export class App {
  constructor() {
    this.addMain();
  }
  addMain(): void {
    connectServer();
    const header = new Header().buildHeader();
    const footer = new Footer().buildFooter();
    header.classList.remove("header--inactive");
    footer.classList.remove("footer--inactive");
    const body = document.querySelector("body");
    const main = new Main().createMainLoyalt();
    if (document.querySelector(".chat")) {
      body?.classList.add("body--app");
    }
    body?.append(main);
    if (sessionStorage.getItem("Login")) {
      const loginSession = JSON.parse(sessionStorage.getItem("Login") ?? "{}");

      const loginSes = JSON.stringify({
        login: `${loginSession?.login}`,
        password: `${loginSession?.password}`,
        id: `${loginSession.id}`,
      });

      body?.insertAdjacentElement("afterbegin", header);
      body?.append("");
      body?.append(footer);
      login(loginSes);
    }
  }
}
