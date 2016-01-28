import ConsoleWriter from './console-writer'
import flattenDecorator from './flatten-decorator'
import jsonSerializer from './json-serializer'
import StringTransformer from './string-transformer'

const messageTransformer = StringTransformer('message')
const consoleJsonWriter = ConsoleWriter({ serializer: jsonSerializer })

function Log(options = {}) {
	const {
		transformers = [ messageTransformer ],
		decorators = [ flattenDecorator ],
		writers = [ consoleJsonWriter ],
		levels = [ 'info', 'warning', 'error' ]
	} = options
	const log = level => (
		data => {
			data = transformers.reduce((d, f) => f(d), data)
			data = Object.assign({ level }, ...decorators.map(f => f(data)))
			writers.map(f => f(level, data))
		}
	)
	return levels.reduce((instance, level) => {
		instance[level] = log(level)
		return instance
	}, {})
}

export default Log
