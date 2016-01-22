/* eslint-env mocha */
import expect from 'must'
import timestampDecorator from './timestamp-decorator'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(timestampDecorator).to.be.a.function()
	})

	it('should return an object with a timestamp', () => {
		const before = Date.now()
		const data = timestampDecorator()
		const after = Date.now()
		expect(data).to.be.an.object()
		expect(data).to.have.ownProperty('timestamp')
		expect(data.timestamp).to.be.a.number()
		expect(data.timestamp).to.be.at.least(before)
		expect(data.timestamp).to.be.at.most(after)
	})
})
