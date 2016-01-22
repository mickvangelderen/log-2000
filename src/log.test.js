/* eslint-env mocha */
import expect from 'must'
import Log from './log'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(Log).to.be.a.function()
	})

	it('should return a logger', () => {
		const log = Log()
		expect(log).to.be.an.object()

		expect(log).to.have.ownProperty('info')
		expect(log.info).to.be.a.function()

		expect(log).to.have.ownProperty('warning')
		expect(log.warning).to.be.a.function()

		expect(log).to.have.ownProperty('error')
		expect(log.error).to.be.a.function()
	})

	it('should write messages to the writer', () => {
		let lastMessage = []
		const cacheWriter = (level, message) => {
			lastMessage = [ level, message ]
		}
		const log = Log({
			writers: [ cacheWriter ]
		})
		log.info('hello')
		expect(lastMessage).to.eql([ 'info', '{"level":"info","message":"hello"}' ])
		log.warning({ one: 1 })
		expect(lastMessage).to.eql([ 'warning', '{"level":"warning","data":{"one":1}}' ])
		log.error({ message: 'This is not good!', user: 'Mick' })
		expect(lastMessage).to.eql([ 'error', '{"level":"error","message":"This is not good!","data":{"user":"Mick"}}' ])
	})
})
