import { checkElem, checkTplElem } from '../../../helpers';
import { AbstractSources, SourcesDataItem } from '../../../interfaces';
import './sources.css';

class Sources implements AbstractSources {
    public draw(data: SourcesDataItem[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = checkTplElem(document.querySelector('#sourceItemTemp'));

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            if (sourceClone instanceof DocumentFragment) {
                checkElem(sourceClone.querySelector('.source__item-name')).textContent = item.name;
                checkElem(sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);
                fragment.append(sourceClone);
            }
        });

        checkElem(document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
