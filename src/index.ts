/**
 * Cookie module.
 */

import Cookie from 'js-cookie'

type DateType = number | Date | undefined

interface Attributes {
    path: string
    domain: string | undefined
    expires?: DateType
    secure?: boolean
    httpOnly?: boolean
    sameSite?: 'strict' | 'lax' | 'none'
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
 * @returns {String}
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
const setCookie = (key: string, value: string, attributes?: Attributes | number): string | void => {
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
 * getCookie('token')
 * //=> abc
 * ```
 *
 * @param key {String} get cookie key
 * 
 * @returns {String}
 */
const getCookie = (key: string): string | void => {
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
 * delCookie('token')
 * ```
 * 
 * @param key {String} del cookie key
 * @param attributes {Object}
 */
const delCookie = (key: string, attributes?: Attributes) => {
    Cookie.remove(key, attributes)
}

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
        let cookies: string[] = document.cookie ? document.cookie.split('; ') : []

        for (let i = 0; i < cookies.length; i++) {
            let parts: string[] = cookies[i].split('=')

            if (parts[0]) {
                let key: string = decode(parts[0])

                delCookie(key)
            }
        }
    }
}

export {
    getDomain,
    setCookie,
    getCookie,
    delCookie,
    clearCookie,
}

export default {
    getDomain,
    set: setCookie,
    get: getCookie,
    del: delCookie,
    clear: clearCookie,
}