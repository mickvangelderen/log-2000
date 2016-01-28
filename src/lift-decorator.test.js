/* eslint-env mocha */
import expect from 'must'
import LiftDecorator from './lift-decorator'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(LiftDecorator).to.be.a.function()
	})

	it('should return a function', () => {
		expect(LiftDecorator('data')).to.be.a.function()
	})

	it('should lift a property', () => {
		const data = { one: 1, two: 2 }
		expect(LiftDecorator('one')(data)).to.eql({ one: 1 })
		// It has side effect :S!
		expect(data).to.eql({ two: 2 })
	})
})
