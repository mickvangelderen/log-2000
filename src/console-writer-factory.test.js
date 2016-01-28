/* eslint-env mocha */
import ConsoleWriter from './console-writer-factory'
import expect from 'must'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(ConsoleWriter).to.be.a.function()
	})

	it('should return a function', () => {
		expect(ConsoleWriter()).to.be.a.function()
	})
})
