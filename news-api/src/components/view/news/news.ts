import './news.css';
interface NewsItems {
    author: string;
    urlToImage: string;
    source: { name: string, id:string };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
}

class News {
    draw(data:NewsItems[]):void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment:DocumentFragment = document.createDocumentFragment();
        const newsItemTemp:HTMLTemplateElement|null = document.querySelector('#newsItemTemp');

        news.forEach((item:NewsItems, idx:number):void => {
            if(newsItemTemp===null)throw new Error(`this elem dont exist`)
                const newsClone:Node = newsItemTemp.content.cloneNode(true);
                if(!(newsClone instanceof DocumentFragment))throw new Error('this elem dont exist')
                if (idx % 2) changeType(newsClone,'.news__item').classList.add('alt');
                changeType(newsClone,'.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            changeType(newsClone,'.news__meta-author').textContent = item.author || item.source.name;
            changeType(newsClone,'.news__meta-date').textContent = item.publishedAt
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('-');
            
            changeType(newsClone,'.news__description-title').textContent = item.title;
            changeType(newsClone,'.news__description-source').textContent = item.source.name;
            changeType(newsClone,'.news__description-content').textContent = item.description;
            changeType(newsClone,'.news__read-more a').setAttribute('href', item.url);
            
            fragment.append(newsClone);
        
        });
        const newsDoc:Element|null=document.querySelector('.news')
        if(newsDoc===null||newsDoc===undefined){
            throw new Error('its element is null')
        } 
            newsDoc.innerHTML = '';
            newsDoc.appendChild(fragment);
        
    }
}

function changeType<Type extends HTMLElement>(parent:DocumentFragment|Document,seacrh:string):Type{
    const result=parent.querySelector<Type>(seacrh)
    if(result===null||result===undefined){
        throw new Error('its element is null')
    }
    return result
}

export default News;
