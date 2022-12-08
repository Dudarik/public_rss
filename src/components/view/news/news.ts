import { checkElem, checkTplElem } from '../../../helpers';
import { AbstractNews, NewsDataItem } from '../../../interfaces';
import './news.css';

class News implements AbstractNews {
    public draw(data: NewsDataItem[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = checkTplElem(document.querySelector('#newsItemTemp'));

        news.forEach((item, idx) => {
            const newsClone = checkTplElem(newsItemTemp).content.cloneNode(true);

            if (newsClone instanceof HTMLTemplateElement) {
                if (idx % 2) checkElem(newsClone.querySelector('.news__item')).classList.add('alt');

                checkElem(newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;
                checkElem(newsClone.querySelector('.news__meta-author')).textContent = item.author || item.source.name;
                checkElem(newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                checkElem(newsClone.querySelector('.news__description-title')).textContent = item.title;
                checkElem(newsClone.querySelector('.news__description-source')).textContent = item.source.name;
                checkElem(newsClone.querySelector('.news__description-content')).textContent = item.description;
                checkElem(newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

                fragment.append(newsClone);
            }
        });

        checkElem(document.querySelector('.news')).innerHTML = '';
        checkElem(document.querySelector('.news')).appendChild(fragment);
    }
}

export default News;
