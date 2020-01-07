## Members

<dl>
<dt><a href="#getDomain">getDomain</a> ⇒ <code>String</code></dt>
<dd><p>set cookie</p></dd>
<dt><a href="#setCookie">setCookie</a> ⇒ <code>String</code></dt>
<dd><p>get cookie</p></dd>
<dt><a href="#getCookie">getCookie</a></dt>
<dd><p>del cookie</p></dd>
<dt><a href="#delCookie">delCookie</a></dt>
<dd><p>clear all cookie</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#decode">decode()</a></dt>
<dd><p>Cookie module.</p></dd>
<dt><a href="#getDomain">getDomain()</a> ⇒ <code>String</code></dt>
<dd><p>get domain</p></dd>
</dl>

<a name="getDomain"></a>

## getDomain ⇒ <code>String</code>
<p>set cookie</p>

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>set cookie key</p> |
| value | <code>String</code> | <p>set cookie value</p> |
| attributes | <code>Number</code> \| <code>Object</code> | <p>set days or attributes</p> |

**Example**  
```js
setCookie('token', 'abc')
//=> token=abc; path=/; domain=localhost
```
<a name="setCookie"></a>

## setCookie ⇒ <code>String</code>
<p>get cookie</p>

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>get cookie key</p> |

**Example**  
```js
getCookie('token')
//=> abc
```
<a name="getCookie"></a>

## getCookie
<p>del cookie</p>

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>del cookie key</p> |
| attributes | <code>Object</code> |  |

**Example**  
```js
delCookie('token')
```
<a name="delCookie"></a>

## delCookie
<p>clear all cookie</p>

**Kind**: global variable  
**Example**  
```js
clearCookie()
```
<a name="decode"></a>

## decode()
<p>Cookie module.</p>

**Kind**: global function  
<a name="getDomain"></a>

## getDomain() ⇒ <code>String</code>
<p>get domain</p>

**Kind**: global function  
**Example**  
```js
getDomain()
//=> localhost
```
