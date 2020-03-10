import zaxCookie, { getDomain, setCookie, getCookie, delCookie, clearCookie } from '../src/index'

import { log } from '../src/_utils/index'

const methods = ['getDomain', 'set', 'get', 'del', 'clear']

Object.defineProperty(window, 'location', {
	writable: true,
	value: {
		hostname: '',
	}
})
Object.defineProperty(window.document, 'cookie', {
	writable: true,
	value: '',
})

describe('zaxCookie', () => {
	methods.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxCookie).toHaveProperty(par)
			expect(zaxCookie[par]).toBeInstanceOf(Function)
		})
	})

	it(`getDomain`, () => {
		window.location.hostname = 'localhost'
		expect(getDomain()).toEqual('localhost')

		/*
		window.location.hostname = '192.168.32.98'
		expect(getDomain()).toEqual('192.168.32.98')

		window.location.hostname = 'demo.com'
		expect(getDomain()).toEqual('demo.com')

		window.location.hostname = 'm.demo.com'
		expect(getDomain()).toEqual('demo.com') 
		*/
	})

	it(`setCookie`, () => {
		window.location.hostname = 'localhost'
		expect(setCookie('token', 'abc')).toEqual('token=abc; path=/; domain=localhost')

		expect(setCookie('token', 'abc', 1)).toEqual('token=abc; path=/; domain=localhost; expires=' + new Date(Date.now() + 1 * 864e5).toUTCString())

		expect(setCookie('token', 'abc', {
			path: '/',
			domain: 'localhost',
			expires: new Date(Date.now() + 1 * 864e5),
			sameSite: 'lax'
		})).toEqual('token=abc; path=/; domain=localhost; expires=' + new Date(Date.now() + 1 * 864e5).toUTCString() + '; sameSite=lax')
	})

	it(`getCookie`, () => {
		window.document.cookie = 'token=abc'
		expect(getCookie('token')).toEqual('abc')

		window.document.cookie = 'channelId="94"'
		expect(getCookie('channelId')).toEqual('94')

		window.document.cookie = ''
		expect(getCookie('')).toEqual({})
	})

	it(`delCookie`, () => {
		expect(delCookie('token')).toEqual(undefined)

		expect(delCookie('')).toEqual(undefined)
	})

	it(`clearCookie`, () => {
		window.document.cookie = 'token=abc'
		expect(clearCookie()).toEqual(undefined)

		window.document.cookie = 'token='
		expect(clearCookie()).toEqual(undefined)

		window.document.cookie = '='
		expect(clearCookie()).toEqual(undefined)

		window.document.cookie = ''
		expect(clearCookie()).toEqual(undefined)
	})
})

describe('log', () => {
	it('should invoke success', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
	})

	it('should return a function', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
		expect(res).toBeInstanceOf(Function)

		let res2 = log('test', 'extra param')
		expect(log).toBeInstanceOf(Function)
		expect(res2).toBeTruthy()
		expect(res2).toBeInstanceOf(Function)

		let res3 = log()
		expect(res3).toBeTruthy()
		expect(res3).toBeInstanceOf(Function)
	})
})
