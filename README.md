# Zax Cookie

[![NPM version](https://img.shields.io/npm/v/zax-cookie.svg?style=flat)](https://www.npmjs.com/package/zax-cookie)
[![Build Status](https://travis-ci.org/Ipxxiao/zax-cookie.svg?branch=master)](https://travis-ci.org/Ipxxiao/zax-cookie)
[![codecov](https://codecov.io/gh/Ipxxiao/zax-cookie/branch/master/graph/badge.svg)](https://codecov.io/gh/Ipxxiao/zax-cookie)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Cookie module

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Install

``` base
npm i zax-cookie -S
```

## build with rollup

``` base
npm run build
```

## use

``` javascript
import { set, get, del } from 'zax-cookie'
import zaxCookie from 'zax-cookie'
```


. **set**
``` javascript
zaxCookie.set('token', 'abc')
```

``` javascript
token=abc; path=/; domain=localhost
```

. **get**
``` javascript
zaxCookie.get('token')
```

``` javascript
abc
```

. **del**
``` javascript
zaxCookie.del('token')
```

## More
- [Docs](https://github.com/Ipxxiao/zax-cookie/tree/master/docs)
- [Test](https://github.com/Ipxxiao/zax-cookie/blob/master/__tests__/index.spec.ts)