const jsonFetch = (...args) => {
    return fetch.apply(window, args);
};
export function http(options) {
    const settings = {
        method: 'GET',
        body: null,
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers(Object.assign({ 'X-Requested-With': 'XMLHttpRequest' }, options.headers)),
        credentials: options.credentials
    };
    if (options.data) {
        settings.method = 'POST';
        if (typeof options.data === 'object') {
            settings.body = JSON.stringify(options.data);
            settings.headers.append('Content-Type', 'application/json');
        }
        else {
            settings.body = options.data;
        }
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
        settings.headers.append('Accept', 'application/json');
        return jsonFetch(options.action, settings)
            .then(response => {
            if (!response.ok) {
                if (response.status < 500) {
                    throw {
                        status: response.status,
                        response: response.json()
                    };
                }
                else {
                    throw response;
                }
            }
            return response.json();
        });
    }
}
//# sourceMappingURL=http.js.map