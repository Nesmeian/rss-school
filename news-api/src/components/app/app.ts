import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsItemsStatus, NewsItemsSources } from '../view/news/news';
class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourceDoc: Element | null = document.querySelector('.sources');
        if (sourceDoc === null || sourceDoc === undefined) throw new Error('elem dont exist');
        sourceDoc.addEventListener('click', (e: Event): void =>
            this.controller.getNews(e, (data?: NewsItemsStatus): void => {
                if (data) {
                    this.view.drawNews(data);
                }
            })
        );
        this.controller.getSources((data?: NewsItemsSources): void => {
            if (data) this.view.drawSources(data);
        });
    }
}

export default App;
