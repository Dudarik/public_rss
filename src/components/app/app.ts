import { checkElem } from '../../helpers';
import { ResponseNews, ResponseSources } from '../../interfaces';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
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
    }
}

export default App;
