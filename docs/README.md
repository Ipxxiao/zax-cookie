<a name="module_zaxCookie"></a>

## zaxCookie
<p>Cookie module.</p>

**See**: doc https://github.com/Ipxxiao/zax-cookie/tree/master/docs  

* [zaxCookie](#module_zaxCookie)
    * _static_
        * [.set](#module_zaxCookie.set) ⇒ <code>String</code>
        * [.get](#module_zaxCookie.get)
    * _inner_
        * [~getDomain()](#module_zaxCookie..getDomain) ⇒ <code>String</code>
        * [~set(key, value, day)](#module_zaxCookie..set) ⇒ <code>String</code>

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

**Example**  
```js
del('token')
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
<a name="module_zaxCookie..set"></a>

### zaxCookie~set(key, value, day) ⇒ <code>String</code>
<p>set cookie</p>

**Kind**: inner method of [<code>zaxCookie</code>](#module_zaxCookie)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>set cookie key</p> |
| value | <code>String</code> | <p>set cookie value</p> |
| day | <code>Number</code> | <p>set cookie expires days</p> |

**Example**  
```js
set('token', 'abc')
//=> token=abc; path=/; domain=localhost
```
