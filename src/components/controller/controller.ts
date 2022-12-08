import { checkElem, checkEventTarget } from '../../helpers';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    protected getSources(callback: () => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    protected getNews(e: Event, callback: () => void) {
        let target = checkElem(checkEventTarget(e.target));
        const newsContainer = checkElem(checkEventTarget(e.currentTarget));

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    if (sourceId) newsContainer.setAttribute('data-source', sourceId);

                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = checkElem(target.parentNode);
        }
    }
}

export default AppController;
