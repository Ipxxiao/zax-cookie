/**
 * Cookie module.
 */
declare type DateType = number | Date | undefined;
interface Attributes {
    path: string;
    domain: string | undefined;
    expires?: DateType;
    secure?: any;
    'max-age'?: any;
}
/**
 * get domain
 *
 * @example
 * ```js
 * getDomain()
 * //=> localhost
 * ```
 *
 * @returns {String}
 */
declare const getDomain: () => string | undefined;
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
 * @param attributes {Number | Object} set days or attributes
 *
 * @returns {String}
 */
declare const setCookie: (key: string, value: string, attributes?: number | Attributes | undefined) => string | void;
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
declare const getCookie: (key: string) => string | void;
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
declare const delCookie: (key: string, attributes?: Attributes | undefined) => void;
/**
 * clear all cookie
 *
 * @example
 * ```js
 * clearCookie()
 * ```
 */
declare const clearCookie: () => void;
export { getDomain, setCookie, getCookie, delCookie, clearCookie, };
declare const _default: {
    getDomain: () => string | undefined;
    set: (key: string, value: string, attributes?: number | Attributes | undefined) => string | void;
    get: (key: string) => string | void;
    del: (key: string, attributes?: Attributes | undefined) => void;
    clear: () => void;
};
export default _default;
