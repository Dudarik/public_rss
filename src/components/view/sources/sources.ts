import { checkElem } from '../../../helpers/index';
import { AbstractSources } from '../../../interfaces/AbstractClasses';
import { SourcesDataItem } from '../../../interfaces/SourcesDataItem';
import './sources.css';

class Sources implements AbstractSources {
    draw(data: SourcesDataItem[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone: HTMLTemplateElement | null = <HTMLTemplateElement>(
                sourceItemTemp?.content.cloneNode(true)
            );

            if (sourceClone instanceof HTMLTemplateElement) {
                checkElem(sourceClone.querySelector('.source__item-name')).textContent = item.name;
                checkElem(sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            }
        });

        checkElem(document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
