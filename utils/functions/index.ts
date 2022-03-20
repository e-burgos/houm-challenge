export const stringToHTML = function (str: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    const desc = doc.getElementsByTagName('body');
    return desc.item(0)?.innerText;
};

const checkType = () => !(typeof window === 'undefined');

export const _storage = {
    get: (key: string) => {
        if (checkType()) {
            try {
                let v;
                if (localStorage.getItem(key) === 'undefined' || localStorage.getItem(key) === undefined) {
                    return;
                }
                if (localStorage.getItem(key)) {
                    v = JSON.parse(localStorage.getItem(key) || '');
                    return v;
                }
                localStorage.removeItem(key);
                return v;
            } catch (e) {
                if (typeof localStorage.getItem(key) === 'string') {
                    return localStorage.getItem(key);
                }
                localStorage.removeItem(key);
            }
        }
    },
    set: (key: string, value: any) => {
        const v = JSON.stringify(value);
        if (checkType()) {
            try {
                localStorage.setItem(key, v);
            } catch (error) {
                throw new Error('localStorage set item cannot be added');
            }
        }
    },
    clear: () => {
        if (checkType()) {
            localStorage.clear();
        }
    },
};