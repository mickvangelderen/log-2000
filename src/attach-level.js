import AttachComputedProperty from './attach-computed-property-factory'

const attachLevel = AttachComputedProperty({
	property: 'level',
	compute: level => level
})

export default attachLevel
