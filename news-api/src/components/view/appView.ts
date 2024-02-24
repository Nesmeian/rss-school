import News from './news/news';
import Sources from './sources/sources';
import {NewsItemsStatus,NewsItemsSources } from './news/news';

export class AppView {
    news:News
    sources:Sources
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data:NewsItemsStatus) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data:NewsItemsSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;