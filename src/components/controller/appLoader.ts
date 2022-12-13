import { AbstractAppLoader } from '../../abstractClasses/AbstractClasses';
import Loader from './loader';

class AppLoader extends Loader implements AbstractAppLoader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: '1d57e164c9ec47d7bd0c099d627af853',
        });
    }
}

export default AppLoader;
