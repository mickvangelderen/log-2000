import AttachComputedProperty from './attach-computed-property-factory'

const attachLevel = AttachComputedProperty({
	property: 'level',
	compute: level => level
})

module.exports = attachLevel
