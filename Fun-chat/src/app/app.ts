import { Main } from "../view/main/mainLoyalt";
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
