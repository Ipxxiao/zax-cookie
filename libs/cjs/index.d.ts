/**
 * Cookie module.
 * @module zaxCookie
 * @see doc https://github.com/Ipxxiao/zax-cookie/tree/master/docs
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
 * @returns {String} domain
 */
declare const getDomain: () => string | undefined;
/**
 * set cookie
 *
 * @example
 * ```js
 * set('token', 'abc')
 * //=> token=abc; path=/; domain=localhost
 * ```
 *
 * @param key {String} set cookie key
 * @param value {String} set cookie value
 * @param day {Number | Object}
 *
 * @returns {String}
 */
declare const set: (key: string, value: string, attributes?: number | Attributes | undefined) => string | void;
/**
 * get cookie
 *
 * @example
 * ```js
 * get('token')
 * //=> abc
 * ```
 *
 * @param key {String} get cookie key
 *
 * @returns {String}
 */
declare const get: (key: string) => string | void;
/**
 * del cookie
 *
 * @example
 * ```js
 * del('token')
 * ```
 *
 * @param key {String} del cookie key
 * @param attributes {Object}
 */
declare const del: (key: string, attributes?: Attributes | undefined) => void;
/**
 * clear all cookie
 *
 * @example
 * ```js
 * clear()
 * ```
 */
declare const clear: () => void;
export { getDomain, set, get, del, clear, };
declare const _default: {
    getDomain: () => string | undefined;
    set: (key: string, value: string, attributes?: number | Attributes | undefined) => string | void;
    get: (key: string) => string | void;
    del: (key: string, attributes?: Attributes | undefined) => void;
    clear: () => void;
};
export default _default;
