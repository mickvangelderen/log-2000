/* eslint-env mocha */
import expect from 'must'
import AttachComputedPropertyFactory from './attach-computed-property-factory'

describe(__filename, () => {
	it('should expose a function', () => {
		expect(AttachComputedPropertyFactory).to.be.a.function()
	})

	it('should return a function', () => {
		const t = AttachComputedPropertyFactory({
			property: 'data',
			compute: (level, data) => data
		})
		expect(t).to.be.a.function()
		expect(t('warning', { one: 1 })).to.eql({ data: { one: 1 }, one: 1 })
	})
})
