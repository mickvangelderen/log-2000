/* eslint-env mocha */
import flattenDecorator from './flatten-decorator'
import expect from 'must'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(flattenDecorator).to.be.a.function()
	})

	it('should behave like identity', () => {
		expect(flattenDecorator({ one: 1 })).to.eql({ one: 1 })
	})
})
