import MainView from './view/main/main';
export default class App {
    constructor() {
        this.createMain();
    }
    createMain() {
        const login = new MainView();
        const log = login.getHtmlElement();
        const wrapper = login.createWrapper().getElement();
        document.body.append(wrapper);
        wrapper.append(log);
    }
}
