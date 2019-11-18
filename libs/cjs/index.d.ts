/**
 * Cookie module.
 * @module zaxCookie
 * @see doc https://github.com/Ipxxiao/zax-cookie/tree/master/docs
 */
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
 * @param day {Number} set cookie expires days
 * @returns {String}
 */
declare const set: (key: string, value: string, day?: number | undefined) => string;
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
 * @returns {String}
 */
declare const get: (key: string) => string;
/**
 * del cookie
 *
 * @example
 * ```js
 * del('token')
 * ```
 *
 * @param key {String} del cookie key
 */
declare const del: (key: string) => void;
export { set, get, del, };
declare const _default: {
    set: (key: string, value: string, day?: number | undefined) => string;
    get: (key: string) => string;
    del: (key: string) => void;
};
export default _default;
