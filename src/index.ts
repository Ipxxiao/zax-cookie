/**
 * Cookie module.
 * @module zaxCookie
 * @see doc https://github.com/Ipxxiao/zax-cookie/tree/master/docs
 */

type DateType = Date | number | string

interface Attributes {
    path: string
    domain: string
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
const getDomain = (): string => {
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
const set = (key: string, value: string, day?: number): string => {
    if (typeof document === 'undefined') {
        return ''
    }

    let attributes: Attributes = {
        path: '/',
        domain: getDomain()
    }

    if (typeof day === 'number') {
        attributes.expires = new Date(Date.now() + day * 864e5).toUTCString()
    }

    value = encodeURIComponent(String(value)).replace(
        /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
        decodeURIComponent
    )

    key = encodeURIComponent(String(key))
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape)

    let stringifiedAttributes: string = ''
    for (let attributeName in attributes) {
        if (!attributes[attributeName]) {
            continue
        }

        stringifiedAttributes += '; ' + attributeName

        if (attributes[attributeName] === true) {
            continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0]
    }

    return (document.cookie = key + '=' + value + stringifiedAttributes)
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
 * @returns {String}
 */
const get = (key: string): string => {
    if (typeof document === 'undefined' || (typeof key === 'string' && !key)) {
        return ''
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    let cookies: string[] = document.cookie ? document.cookie.split('; ') : []
    let jar: any = {}

    for (let i = 0; i < cookies.length; i++) {
        let parts: string[] = cookies[i].split('=')
        let cookie: string = parts.slice(1).join('=')

        if (cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1)
        }

        try {
            let name: string = decode(parts[0])
            jar[name] = decode(cookie)

            if (key === name) {
                break
            }
        } catch (e) { }
    }

    return key ? jar[key] : jar
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
 */
const del = (key: string) => {
    get(key) && set(key, '', -1)
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
    if (typeof document === 'undefined') {
        return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    let cookies: string[] = document.cookie ? document.cookie.split('; ') : []

    for (let i = 0; i < cookies.length; i++) {
        let parts: string[] = cookies[i].split('=')

        try {
            let key: string = decode(parts[0])

            del(key)
        } catch (e) { }
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