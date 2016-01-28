/* eslint-env mocha */
import expect from 'must'
import attachDate from './attach-date'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(attachDate).to.be.a.function()
	})

	it('should attach the date to the data', () => {
		const data = { one: 1 }
		const start = new Date()
		const result = attachDate('warning', data)
		const end = new Date()

		// Data should be unmodified.
		expect(data).to.eql({ one: 1 })

		// The result should equal { date: <current date>, one: 1 }.
		expect(result).to.have.ownProperty('one', 1)
		expect(result).to.have.ownProperty('date')
		expect(result.date).to.be.a.date()
		expect(result.date).to.be.at.least(start)
		expect(result.date).to.be.at.most(end)
	})
})
