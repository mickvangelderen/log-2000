import AttachComputedProperty from './attach-computed-property-factory'

const attachDate = AttachComputedProperty({
	property: 'date',
	compute: () => new Date()
})

module.exports = attachDate
