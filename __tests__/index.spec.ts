import { set, get, del } from '../src/index'
import zaxCookie from '../src/index'

import { log } from '../src/_utils/index'

const methods = ['set', 'get', 'del']

describe('zaxCookie', () => {
	// methods.forEach(par => {
	// 	it(`should have ${par} method`, () => {
	// 		expect(zaxCookie).toHaveProperty(par)
	// 		expect(zaxCookie[par]).toBeInstanceOf(Function)
	// 	})
	// })

	// it(`set`, () => {
	// 	expect(set('token', 'abc')).toEqual('token=abc; path=/; domain=localhost')
	// })

	// it(`get`, () => {
	// 	expect(get('token')).toEqual(undefined)
	// })

	// it(`del`, () => {
	// 	expect(del('token')).toEqual(undefined)
	// })
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
