import './sources.css';
import { changeType,NewsItems } from '../news/news';
class Sources {
    draw(data:NewsItems[]):void {
        const fragment:DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp:HTMLTemplateElement|null = document.querySelector('#sourceItemTemp');

        data.forEach((item:NewsItems):void => {
            if(sourceItemTemp===null)throw new Error('this elem does not exist ')
            const sourceClone:Node = sourceItemTemp.content.cloneNode(true);
            if(!(sourceClone instanceof DocumentFragment))throw new Error('this elem does not exist')
            changeType(sourceClone,'.source__item-name').textContent = item.name;
            changeType(sourceClone,'.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        const sourceDoc=document.querySelector('.sources')
        if(sourceDoc===null){throw new Error('this elem not exist')}
        sourceDoc.append(fragment);
    }
}

export default Sources;
