/* eslint-env mocha */
import expect from 'must'
import StringTransformer from './string-transformer'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(StringTransformer).to.be.a.function()
	})

	it('should return a function', () => {
		expect(StringTransformer('message')).to.be.a.function()
	})

	it('should return an object with a "message" property if the argument is a string', () => {
		expect(StringTransformer('message')('hello')).to.eql({ message: 'hello' })
	})

	it('should simply return the non-string if a non-string is passed', () => {
		expect(StringTransformer('message')(1)).to.eql(1)
		expect(StringTransformer('message')({ message: 'hello' })).to.eql({ message: 'hello' })
	})
})
