import { getDomain, set, get, del, clear } from '../src/index'
import zaxCookie from '../src/index'

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

	it(`set`, () => {
		window.location.hostname = 'localhost'
		expect(set('token', 'abc')).toEqual('token=abc; path=/; domain=localhost')

		expect(set('token', 'abc', 1)).toEqual('token=abc; path=/; domain=localhost; expires=' + new Date(Date.now() + 1 * 864e5).toUTCString())
	})

	it(`get`, () => {
		window.document.cookie = 'token=abc'
		expect(get('token')).toEqual('abc')

		window.document.cookie = 'channelId="94"'
		expect(get('channelId')).toEqual('94')

		window.document.cookie = ''
		expect(get('')).toEqual({})
	})

	it(`del`, () => {
		expect(del('token')).toEqual(undefined)

		expect(del('')).toEqual(undefined)
	})

	it(`clear`, () => {
		window.document.cookie = 'token=abc'
		expect(clear()).toEqual(undefined)

		window.document.cookie = 'token='
		expect(clear()).toEqual(undefined)

		window.document.cookie = '='
		expect(clear()).toEqual(undefined)

		window.document.cookie = ''
		expect(clear()).toEqual(undefined)
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
