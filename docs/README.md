<a name="module_zaxCookie"></a>

## zaxCookie
<p>Cookie module.</p>

**See**: doc https://github.com/Ipxxiao/zax-cookie/tree/master/docs  

* [zaxCookie](#module_zaxCookie)
    * _static_
        * [.getDomain](#module_zaxCookie.getDomain) ⇒ <code>String</code>
        * [.setCookie](#module_zaxCookie.setCookie) ⇒ <code>String</code>
        * [.getCookie](#module_zaxCookie.getCookie)
        * [.delCookie](#module_zaxCookie.delCookie)
    * _inner_
        * [~getDomain()](#module_zaxCookie..getDomain) ⇒ <code>String</code>

<a name="module_zaxCookie.getDomain"></a>

### zaxCookie.getDomain ⇒ <code>String</code>
<p>set cookie</p>

**Kind**: static property of [<code>zaxCookie</code>](#module_zaxCookie)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>set cookie key</p> |
| value | <code>String</code> | <p>set cookie value</p> |
| day | <code>Number</code> \| <code>Object</code> |  |

**Example**  
```js
setCookie('token', 'abc')
//=> token=abc; path=/; domain=localhost
```
<a name="module_zaxCookie.setCookie"></a>

### zaxCookie.setCookie ⇒ <code>String</code>
<p>get cookie</p>

**Kind**: static property of [<code>zaxCookie</code>](#module_zaxCookie)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>get cookie key</p> |

**Example**  
```js
getCookie('token')
//=> abc
```
<a name="module_zaxCookie.getCookie"></a>

### zaxCookie.getCookie
<p>del cookie</p>

**Kind**: static property of [<code>zaxCookie</code>](#module_zaxCookie)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>del cookie key</p> |
| attributes | <code>Object</code> |  |

**Example**  
```js
delCookie('token')
```
<a name="module_zaxCookie.delCookie"></a>

### zaxCookie.delCookie
<p>clear all cookie</p>

**Kind**: static property of [<code>zaxCookie</code>](#module_zaxCookie)  
**Example**  
```js
clearCookie()
```
<a name="module_zaxCookie..getDomain"></a>

### zaxCookie~getDomain() ⇒ <code>String</code>
<p>get domain</p>

**Kind**: inner method of [<code>zaxCookie</code>](#module_zaxCookie)  
**Returns**: <code>String</code> - <p>domain</p>  
**Example**  
```js
getDomain()
//=> localhost
```
