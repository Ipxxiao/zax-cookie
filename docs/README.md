<a name="module_zaxCookie"></a>

## zaxCookie
<p>Cookie module.</p>

**See**: doc https://github.com/Ipxxiao/zax-cookie/tree/master/docs  

* [zaxCookie](#module_zaxCookie)
    * _static_
        * [.getDomain](#module_zaxCookie.getDomain) ⇒ <code>String</code>
        * [.set](#module_zaxCookie.set) ⇒ <code>String</code>
        * [.get](#module_zaxCookie.get)
        * [.del](#module_zaxCookie.del)
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
set('token', 'abc')
//=> token=abc; path=/; domain=localhost
```
<a name="module_zaxCookie.set"></a>

### zaxCookie.set ⇒ <code>String</code>
<p>get cookie</p>

**Kind**: static property of [<code>zaxCookie</code>](#module_zaxCookie)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>get cookie key</p> |

**Example**  
```js
get('token')
//=> abc
```
<a name="module_zaxCookie.get"></a>

### zaxCookie.get
<p>del cookie</p>

**Kind**: static property of [<code>zaxCookie</code>](#module_zaxCookie)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>del cookie key</p> |
| attributes | <code>Object</code> |  |

**Example**  
```js
del('token')
```
<a name="module_zaxCookie.del"></a>

### zaxCookie.del
<p>clear all cookie</p>

**Kind**: static property of [<code>zaxCookie</code>](#module_zaxCookie)  
**Example**  
```js
clear()
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
