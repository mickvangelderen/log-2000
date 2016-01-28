/* eslint-env mocha */
import expect from 'must'
import attachLevel from './attach-level'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(attachLevel).to.be.a.function()
	})

	it('should attach the date to the data', () => {
		const data = { one: 1 }
		const result = attachLevel('warning', data)

		// Data should be unmodified.
		expect(data).to.eql({ one: 1 })
		
		expect(result).to.eql({ level: 'warning', one: 1 })
	})
})
