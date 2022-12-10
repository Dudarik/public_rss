import { AbstractAppLoader } from '../../abstractClasses/AbstractClasses';
import Loader from './loader';

class AppLoader extends Loader implements AbstractAppLoader {
    constructor() {
        // super('https://newsapi.org/v2/', {
        super('https://nodenews.up.railway.app/', {
            apiKey: '1d57e164c9ec47d7bd0c099d627af853', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
