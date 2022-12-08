import News from './news/news';
import Sources from './sources/sources';
import { AbstractAppView } from '../../interfaces/AbstractClasses';
import { ResponseSources } from '../../interfaces/ResponseSources';
import { ResponseNews } from '../../interfaces/ResponseNews';

export class AppView implements AbstractAppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ResponseNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ResponseSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
