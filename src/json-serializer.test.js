/* eslint-env mocha */
import expect from 'must'
import jsonSerializer from './json-serializer'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(jsonSerializer).to.be.a.function()
	})

	it('should return a string', () => {
		expect(jsonSerializer('warning', { one: 1 })).to.eql('{"one":1}')
	})
})
