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
		const attachLevel = (level, data) => Object.assign({ level }, data)
		
		let lastMessage = []
		const cacheWriter = (level, data) => {
			lastMessage = [ level, data ]
		}

		const log = Log({
			transformers: [ attachLevel ],
			writers: [ cacheWriter ]
		})

		const msg = { one: 1 }

		log.info(msg)
		expect(lastMessage).to.eql([ 'info', { level: 'info', one: 1 } ])

		log.warning(msg)
		expect(lastMessage).to.eql([ 'warning', { level: 'warning', one: 1 } ])

		log.error(msg)
		expect(lastMessage).to.eql([ 'error', { level: 'error', one: 1 } ])

		// Assert message is still intact. 
		expect(msg).to.eql({ one: 1 })
	})

})
