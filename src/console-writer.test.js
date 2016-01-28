/* eslint-env mocha */
import consoleWriter from './console-writer'
import expect from 'must'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(consoleWriter).to.be.a.function()
	})

	it('should return a function', () => {
		expect(consoleWriter()).to.be.a.function()
	})
})
