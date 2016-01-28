/* eslint-env mocha */
import PropertyDecorator from './property-decorator'
import expect from 'must'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(PropertyDecorator).to.be.a.function()
	})

	it('should return a function', () => {
		expect(PropertyDecorator('data')).to.be.a.function()
	})

	it('should return an object with a "data" property', () => {
		expect(PropertyDecorator('data')({ one: 1 })).to.eql({ data: { one: 1 }})
	})

	it('should return an object with a "custom" property', () => {
		expect(PropertyDecorator('custom')({ one: 1 })).to.eql({ custom: { one: 1 }})
	})

	it('should return an empty object in case the data object is empty', () => {
		expect(PropertyDecorator('data')({})).to.eql({})
	})
})
