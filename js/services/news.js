class NewsService {
    constructor(http) {
        this._key = "0a19f03af2f340f89becf9753d383301";
        this._url = "https://newsapi.org/v2";
        this._country = "ua";
        this._category = "technology";
        this._http = http;
    }
    /**
     * fetchTopHeadlines - function which makes request for TopHeadlines according to selected filters
     * @param {*} callback 
     * @param {string} country which is set in filter
     * @param {string} category which is set in filter
     */
    fetchTopHeadlines(callback, country = this._country, category = this._category) {
        this._http.get(`${this._url}/top-headlines?country=${country}&category=${category}&apiKey=${this._key}`, callback);
    }

    /**
     * fetchSearchResults - function which makes request for news according to search keyword
     * @param {*} callback
     * @param {string} keyword search keyword, URL encoded
     * */ 

    fetchSearchResults(callback, searchKeyword) {
        this._http.get(`${this._url}/everything?q=${searchKeyword}&apiKey=${this._key}`, callback);
    }
}

