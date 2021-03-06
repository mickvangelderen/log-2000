const CoerceStringToObjectFactory = property =>
	(level, data) =>
		typeof data === 'string' ?
			{ [property]: data } :
			data

module.exports = CoerceStringToObjectFactory
