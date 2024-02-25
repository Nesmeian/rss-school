import AppLoader from './appLoader';
import {NewsItemsSources,NewsItemsStatus } from '../view/news/news';
export type Callback<T> = (data?: T) => void;

class AppController extends AppLoader {
    getSources(callback: Callback<NewsItemsSources>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e:Event, callback: Callback<NewsItemsStatus>) {
        let target: EventTarget|null|Element = e.target;
        const newsContainer:EventTarget|null|Element = e.currentTarget;
        while (target !== newsContainer) {
            if(target===null) throw new Error('elem dosent exist')
            if(!(target instanceof Element)){throw new Error('Erorr')}
            if(!(newsContainer instanceof Element)){throw new Error('Erorr')}
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId as string);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
