import consoleWriter from './console-writer'
import coerceStringToObject from './coerce-string-to-object'
import coerceAnythingToObject from './coerce-anything-to-object'
import attachDate from './attach-date'
import attachLevel from './attach-level'

function Log(options = {}) {
	const {
		transformers = [
			coerceStringToObject,
			coerceAnythingToObject,
			attachDate,
			attachLevel
		],
		writers = [ consoleWriter ],
		levels = [ 'info', 'warning', 'error' ]
	} = options
	const log = level => (
		data => {
			data = transformers.reduce((d, f) => f(level, d), data)
			writers.map(f => f(level, data))
		}
	)
	return levels.reduce((instance, level) => {
		instance[level] = log(level)
		return instance
	}, {})
}

export default Log
