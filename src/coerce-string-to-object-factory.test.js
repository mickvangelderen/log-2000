/* eslint-env mocha */
import expect from 'must'
import CoerceStringToObjectFactory from './coerce-string-to-object-factory'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(CoerceStringToObjectFactory).to.be.a.function()
	})

	it('should return a function', () => {
		const f = CoerceStringToObjectFactory('custom')
		expect(f).to.be.a.function()
		expect(f('warning', undefined)).to.eql(undefined)
		expect(f('warning', null)).to.eql(null)
		expect(f('warning', 1)).to.eql(1)
		expect(f('warning', 'hello')).to.eql({ custom: 'hello' })
		expect(f('warning', { one: 1})).to.eql({ one: 1})
	})
})
