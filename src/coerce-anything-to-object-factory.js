const CoerceAnythingToObjectFactory = property =>
	(level, data) =>
		data === null || typeof data !== 'object' ?
			{ [property]: data } :
			data

export default CoerceAnythingToObjectFactory
