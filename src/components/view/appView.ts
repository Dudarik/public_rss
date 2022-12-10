import { AbstractAppView } from '../../abstractClasses/AbstractClasses';
import { ResponseNews, ResponseSources } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView implements AbstractAppView {
    private readonly news: News;
    private readonly sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Readonly<ResponseNews> | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Readonly<ResponseSources> | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
