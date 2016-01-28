/* eslint-env mocha */
import expect from 'must'
import CoerceAnythingToObjectFactory from './coerce-anything-to-object-factory'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(CoerceAnythingToObjectFactory).to.be.a.function()
	})

	it('should return a function', () => {
		const f = CoerceAnythingToObjectFactory('custom')
		expect(f).to.be.a.function()
		expect(f('warning', undefined)).to.eql({ custom: undefined })
		expect(f('warning', null)).to.eql({ custom: null })
		expect(f('warning', 1)).to.eql({ custom: 1 })
		expect(f('warning', 'hello')).to.eql({ custom: 'hello' })
		expect(f('warning', { one: 1})).to.eql({ one: 1})
	})
})
