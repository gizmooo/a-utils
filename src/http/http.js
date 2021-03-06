const jsonFetch = (...args) => {
    return fetch.apply(window, args);
};
export function http(options) {
    const settings = {
        method: 'GET',
        body: null,
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers(Object.assign({}, options.headers))
    };
    if (options.data) {
        settings.method = 'POST';
        settings.body = options.data;
    }
    if (options.method)
        settings.method = options.method;
    if (options.type === 'blob') {
        return fetch(options.action, settings)
            .then(response => {
            if (!response.ok)
                throw response;
            return response.blob();
        });
    }
    else if (options.type === 'text') {
        return fetch(options.action, settings)
            .then(response => {
            if (!response.ok)
                throw response;
            return response.text();
        });
    }
    else {
        return jsonFetch(options.action, settings)
            .then(response => {
            if (!response.ok)
                throw response;
            return response.json();
        });
    }
}
//# sourceMappingURL=http.js.map