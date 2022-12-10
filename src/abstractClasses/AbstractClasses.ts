import { Callback, NewsDataItem, ResponseNews, ResponseSources, SourcesDataItem } from '../interfaces';
import { IAbstractAppController } from '../interfaces/AbstractInterfaces';

export abstract class AbstractLoader {}

export abstract class AbstractAppLoader {}

abstract class AbstractRender<T> {
    public abstract draw(data: T): void;
}

export abstract class AbstractSources extends AbstractRender<SourcesDataItem[]> {
    public abstract draw(data: SourcesDataItem[]): void;
}

export abstract class AbstractNews extends AbstractRender<NewsDataItem[]> {
    public abstract draw(data: NewsDataItem[]): void;
}

export abstract class AbstractAppController implements IAbstractAppController<ResponseSources, ResponseNews> {
    public abstract getSources<ResponseSources>(callback: Callback<ResponseSources>): void;
    public abstract getNews<ResponseNews>(e: Event, callback: Callback<ResponseNews>): void;
}

export abstract class AbstractAppView {
    public abstract drawNews(data: ResponseNews | undefined): void;
    public abstract drawSources(data: ResponseSources | undefined): void;
}
