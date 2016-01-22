/* eslint-env mocha */
import dataDecorator from './data-decorator'
import expect from 'must'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(dataDecorator).to.be.a.function()
	})

	it('should return an object with a data property', () => {
		expect(dataDecorator({ one: 1 })).to.eql({ data: { one: 1 }})
	})

	it('should return an empty object in case the data object is empty', () => {
		expect(dataDecorator({})).to.eql({})
	})
})
