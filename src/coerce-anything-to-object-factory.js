const CoerceAnythingToObjectFactory = property =>
	(level, data) =>
		data === null || typeof data !== 'object' ?
			{ [property]: data } :
			data

module.exports = CoerceAnythingToObjectFactory
