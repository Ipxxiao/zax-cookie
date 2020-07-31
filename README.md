# Zax-cookie &middot; [![NPM version](https://img.shields.io/npm/v/zax-cookie.svg?style=flat)](https://www.npmjs.com/package/zax-cookie) [![Build Status](https://travis-ci.org/Ipxxiao/zax-cookie.svg?branch=master)](https://travis-ci.org/Ipxxiao/zax-cookie) [![codecov](https://codecov.io/gh/Ipxxiao/zax-cookie/branch/master/graph/badge.svg)](https://codecov.io/gh/Ipxxiao/zax-cookie) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Cookie module

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Install

``` base
npm i zax-cookie -S
or
yarn add zax-cookie
```

## Usage

``` javascript
import zaxCookie, { getDomain, setCookie, getCookie, delCookie, clearCookie } from 'zax-cookie'
or
const zaxCookie, { getDomain, setCookie, getCookie, delCookie, clearCookie } = require('zax-cookie')
```


. **getDomain**
``` javascript
zaxCookie.getDomain() //=> getDomain()
```

``` javascript
localhost
```

. **set**
``` javascript
zaxCookie.set('token', 'abc') //=> setCookie('token', 'abc')
zaxCookie.set('token', 'abc', 1)
zaxCookie.set('token', 'abc', {
    path: '/',
    domain: 'demo.com'
    expires: new Date(Date.now() + 1 * 864e5),
    sameSite: 'lax'
})
```

``` javascript
token=abc; path=/; domain=localhost
token=abc; path=/; domain=localhost; expires=Wed, 20 Nov 2019 09:18:38 GMT
token=abc; path=/; domain=demo.com; expires=Wed, 20 Nov 2019 09:18:38 GMT; sameSite=lax
```

. **get**
``` javascript
zaxCookie.get('token') //=> getCookie('token')
```

``` javascript
abc
```

. **del**
``` javascript
zaxCookie.del('token') //=> delCookie('token')
zaxCookie.del('token', {
    path: '/',
    domain: 'demo.com'
})
```

. **clear**
``` javascript
zaxCookie.clear() //=> clearCookie()
```

## More
- [License](https://github.com/Ipxxiao/zax-cookie/blob/master/LICENSE)
- [Docs](https://github.com/Ipxxiao/zax-cookie/tree/master/docs)
- [Test](https://github.com/Ipxxiao/zax-cookie/blob/master/__tests__/index.spec.ts)
