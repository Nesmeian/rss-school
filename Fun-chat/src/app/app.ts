import { Main } from "../view/main/mainLoyalt";
export class App {
  constructor() {
    this.addMain();
  }
  addMain(): void {
    const main = new Main();
    const mainElem = main.createMainLoyalt();
    document.body.append(mainElem);
  }
}
