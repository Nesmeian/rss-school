import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(('https://newsapi.org/v2/' as string), {
            apiKey: '992e8d96108d477e8604b655b740bd2f'
        });
    }
}

export default AppLoader;
