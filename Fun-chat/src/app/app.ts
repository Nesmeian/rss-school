import { Main } from "../view/main/mainLoyalt";
import "../components/buttons/button.scss";
import "../components/links/links.scss";
import { Header } from "../view/header/header";
import { Footer } from "../view/footer/footer";
export class App {
  constructor() {
    this.addMain();
  }
  addMain(): void {
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
  }
}
