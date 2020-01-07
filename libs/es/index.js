/**
 * Cookie module.
 * @module zaxCookie
 * @see doc https://github.com/Ipxxiao/zax-cookie/tree/master/docs
 */
import Cookie from 'js-cookie';
const decode = (s) => {
    return s.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
};
/**
 * get domain
 *
 * @example
 * ```js
 * getDomain()
 * //=> localhost
 * ```
 *
 * @returns {String} domain
 */
const getDomain = () => {
    /* istanbul ignore next */
    if (typeof location !== 'undefined') {
        let hostname = location.hostname;
        // domain.com
        if (hostname.split('.').length == 1) {
            // 一级域名，直接访问
            return hostname;
        }
        // 192.168.32.251
        let lastDot = hostname.lastIndexOf('.');
        let block = hostname.slice(lastDot + 1);
        if (!isNaN(Number(block))) {
            // 数字，则为IP地址
            return hostname;
        }
        // a.b.c.domain.com
        let lastDomainDot = hostname.lastIndexOf('.', lastDot - 1);
        return hostname.slice(lastDomainDot + 1);
    }
};
/**
 * set cookie
 *
 * @example
 * ```js
 * setCookie('token', 'abc')
 * //=> token=abc; path=/; domain=localhost
 * ```
 *
 * @param key {String} set cookie key
 * @param value {String} set cookie value
 * @param day {Number | Object}
 *
 * @returns {String}
 */
const setCookie = (key, value, attributes) => {
    /* istanbul ignore next */
    if (typeof document !== 'undefined') {
        let options = {
            path: '/',
            domain: getDomain()
        };
        if (!attributes) {
            return Cookie.set(key, value, options);
        }
        else if (typeof attributes === 'number') {
            options.expires = attributes;
            return Cookie.set(key, value, options);
        }
        else if (Object.prototype.toString.call(attributes) === '[object Object]') {
            attributes = Object.assign({}, options, attributes);
            return Cookie.set(key, value, attributes);
        }
    }
};
/**
 * get cookie
 *
 * @example
 * ```js
 * getCookie('token')
 * //=> abc
 * ```
 *
 * @param key {String} get cookie key
 *
 * @returns {String}
 */
const getCookie = (key) => {
    /* istanbul ignore next */
    if (typeof document !== 'undefined') {
        return Cookie.get(key);
    }
};
/**
 * del cookie
 *
 * @example
 * ```js
 * delCookie('token')
 * ```
 *
 * @param key {String} del cookie key
 * @param attributes {Object}
 */
const delCookie = (key, attributes) => {
    Cookie.remove(key, attributes);
};
/**
 * clear all cookie
 *
 * @example
 * ```js
 * clearCookie()
 * ```
 */
const clearCookie = () => {
    /* istanbul ignore next */
    if (typeof document !== 'undefined') {
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.
        let cookies = document.cookie ? document.cookie.split('; ') : [];
        for (let i = 0; i < cookies.length; i++) {
            let parts = cookies[i].split('=');
            if (parts[0]) {
                let key = decode(parts[0]);
                delCookie(key);
            }
        }
    }
};
export { getDomain, setCookie, getCookie, delCookie, clearCookie, };
export default {
    getDomain,
    set: setCookie,
    get: getCookie,
    del: delCookie,
    clear: clearCookie,
};
//# sourceMappingURL=index.js.map