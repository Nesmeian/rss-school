interface UrlRes {
    type: string;
    url: string;
    redirected: boolean;
    status: number;
    ok: boolean;
    statusText:string;
    json:()=>Promise <JSON>;
}
class Loader {
    baseLink:string;
    options:object;
    constructor(baseLink:string, options:object) {
        this.baseLink = baseLink;
        this.options = options;
    }
    
    public getResp(
        { endpoint, options = {} }:{endpoint:string,options?:object},
        callback = () => {
            console.error('No callback for GET response');
        }
    ):void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res:UrlRes) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(options: RequestOptions, endpoint: string):string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: string, callback: (data: JSON) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}
type RequestOptions = {
    [key: string]: string
  }
export default Loader;