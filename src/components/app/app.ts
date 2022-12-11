import { checkElem } from '../../helpers';
import { ResponseNews, ResponseSources } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

abstract class AbstractApp {
    public abstract start(): void;
}

class App implements AbstractApp {
    private readonly controller: AppController;
    private readonly view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        checkElem(document.querySelector('.sources')).addEventListener('click', (e) =>
            this.controller.getNews<ResponseNews>(e, (data) => this.view.drawNews(data))
        );
        this.controller.getSources<ResponseSources>((data) => this.view.drawSources(data));

        // this load placeholder, on start application
        const fakeData: ResponseNews = { status: 'idle', totalResults: 0, articles: [] };
        this.view.drawNews(fakeData);
    }
}

export default App;
