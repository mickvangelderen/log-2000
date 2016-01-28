/* eslint-env mocha */
import expect from 'must'
import NonObjectTransformer from './non-object-transformer'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(NonObjectTransformer).to.be.a.function()
	})

	it('should return a function', () => {
		expect(NonObjectTransformer('value')).to.be.a.function()
	})

	it('should return an object with a "value" property if the argument is a string', () => {
		expect(NonObjectTransformer('value')(1)).to.eql({ value: 1 })
		expect(NonObjectTransformer('value')('hello')).to.eql({ value: 'hello' })
		expect(NonObjectTransformer('value')(null)).to.eql({ value: null })
	})

	it('should simply return the object if an object is passed', () => {
		expect(NonObjectTransformer('value')({ value: 'hello' })).to.eql({ value: 'hello' })
	})
})
