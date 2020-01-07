"use strict";
/**
 * Cookie module.
 * @module zaxCookie
 * @see doc https://github.com/Ipxxiao/zax-cookie/tree/master/docs
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_cookie_1 = __importDefault(require("js-cookie"));
var decode = function (s) {
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
var getDomain = function () {
    /* istanbul ignore next */
    if (typeof location !== 'undefined') {
        var hostname = location.hostname;
        // domain.com
        if (hostname.split('.').length == 1) {
            // 一级域名，直接访问
            return hostname;
        }
        // 192.168.32.251
        var lastDot = hostname.lastIndexOf('.');
        var block = hostname.slice(lastDot + 1);
        if (!isNaN(Number(block))) {
            // 数字，则为IP地址
            return hostname;
        }
        // a.b.c.domain.com
        var lastDomainDot = hostname.lastIndexOf('.', lastDot - 1);
        return hostname.slice(lastDomainDot + 1);
    }
};
exports.getDomain = getDomain;
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
var setCookie = function (key, value, attributes) {
    /* istanbul ignore next */
    if (typeof document !== 'undefined') {
        var options = {
            path: '/',
            domain: getDomain()
        };
        if (!attributes) {
            return js_cookie_1.default.set(key, value, options);
        }
        else if (typeof attributes === 'number') {
            options.expires = attributes;
            return js_cookie_1.default.set(key, value, options);
        }
        else if (Object.prototype.toString.call(attributes) === '[object Object]') {
            attributes = Object.assign({}, options, attributes);
            return js_cookie_1.default.set(key, value, attributes);
        }
    }
};
exports.setCookie = setCookie;
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
var getCookie = function (key) {
    /* istanbul ignore next */
    if (typeof document !== 'undefined') {
        return js_cookie_1.default.get(key);
    }
};
exports.getCookie = getCookie;
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
var delCookie = function (key, attributes) {
    js_cookie_1.default.remove(key, attributes);
};
exports.delCookie = delCookie;
/**
 * clear all cookie
 *
 * @example
 * ```js
 * clearCookie()
 * ```
 */
var clearCookie = function () {
    /* istanbul ignore next */
    if (typeof document !== 'undefined') {
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        for (var i = 0; i < cookies.length; i++) {
            var parts = cookies[i].split('=');
            if (parts[0]) {
                var key = decode(parts[0]);
                delCookie(key);
            }
        }
    }
};
exports.clearCookie = clearCookie;
exports.default = {
    getDomain: getDomain,
    set: setCookie,
    get: getCookie,
    del: delCookie,
    clear: clearCookie,
};
//# sourceMappingURL=index.js.map