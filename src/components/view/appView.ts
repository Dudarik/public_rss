import { AbstractAppView, ResponseNews, ResponseSources } from '../../interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView implements AbstractAppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ResponseNews | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ResponseSources | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
