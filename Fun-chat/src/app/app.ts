import { Main } from "../view/main/mainLoyalt";
import "../components/buttons/button.scss";
import "../components/links/links.scss";
export class App {
  constructor() {
    this.addMain();
  }
  addMain(): void {
    const body = document.querySelector("body");
    const main = new Main().createMainLoyalt();
    body?.insertAdjacentElement("afterbegin", main);
  }
}
