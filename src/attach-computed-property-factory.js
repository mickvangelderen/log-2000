const AttachComputedProperty = (options = {}) => {
	const { property, compute } = options
	return (level, data) => Object.assign({ [property]: compute(level, data) }, data)
}

module.exports = AttachComputedProperty
