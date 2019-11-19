/**
 * Cookie module.
 * @module zaxCookie
 * @see doc https://github.com/Ipxxiao/zax-cookie/tree/master/docs
 */

import Cookie from 'js-cookie'

type DateType = number | Date | undefined

interface Attributes {
    path: string
    domain: string | undefined
    expires?: DateType
    secure?: any
    'max-age'?: any
}

const decode = (s: string): string => {
    return s.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
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
const getDomain = (): string | undefined => {
    /* istanbul ignore next */
    if (typeof location !== 'undefined') {
        let hostname: string = location.hostname
        // domain.com
        if (hostname.split('.').length == 1) {
            // 一级域名，直接访问
            return hostname
        }

        // 192.168.32.251
        let lastDot: number = hostname.lastIndexOf('.')
        let block: string = hostname.slice(lastDot + 1)
        if (!isNaN(Number(block))) {
            // 数字，则为IP地址
            return hostname
        }

        // a.b.c.domain.com
        let lastDomainDot: number = hostname.lastIndexOf('.', lastDot - 1)
        return hostname.slice(lastDomainDot + 1)
    }
}

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
const set = (key: string, value: string, attributes?: Attributes | number): string | void => {
    /* istanbul ignore next */
    if (typeof document !== 'undefined') {
        let options: Attributes = {
            path: '/',
            domain: getDomain()
        }

        if (!attributes) {
            return Cookie.set(key, value, options)
        } else if (typeof attributes === 'number') {
            options.expires = attributes

            return Cookie.set(key, value, options)
        } else if (Object.prototype.toString.call(attributes) === '[object Object]') {
            attributes = Object.assign({}, options, attributes)

            return Cookie.set(key, value, attributes)
        }
    }
}

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
const get = (key: string): string | void => {
    /* istanbul ignore next */
    if (typeof document !== 'undefined') {
        return Cookie.get(key)
    }
}

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
const del = (key: string, attributes?: Attributes) => {
    Cookie.remove(key, attributes)
}

/**
 * clear all cookie
 *
 * @example
 * ```js
 * clear()
 * ```
 */
const clear = () => {
    /* istanbul ignore next */
    if (typeof document !== 'undefined') {
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.
        let cookies: string[] = document.cookie ? document.cookie.split('; ') : []

        for (let i = 0; i < cookies.length; i++) {
            let parts: string[] = cookies[i].split('=')

            if (parts[0]) {
                let key: string = decode(parts[0])

                del(key)
            }
        }
    }
}

export {
    getDomain,
    set,
    get,
    del,
    clear,
}

export default {
    getDomain,
    set,
    get,
    del,
    clear,
}