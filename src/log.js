import consoleWriter from './console-writer'
import dataDecorator from './data-decorator'
import liftDecorator from './lift-decorator'
import jsonSerializer from './json-serializer'
import stringTransformer from './string-transformer'

const messageTransformer = stringTransformer('message')
const messageDecorator = liftDecorator('message')

export function Log(options = {}) {
	const {
		transformers = [ messageTransformer ],
		decorators = [ messageDecorator, dataDecorator ],
		serializers = [ jsonSerializer ],
		writers = [ consoleWriter ],
		levels = [ 'info', 'warning', 'error' ]
	} = options
	const log = level => (
		data => {
			data = transformers.reduce((d, f) => f(d), data)
			data = Object.assign({ level }, ...decorators.map(f => f(data)))
			data = serializers.reduce((d, f) => f(d), data)
			writers.map(f => f(level, data))
		}
	)
	return levels.reduce((instance, level) => {
		instance[level] = log(level)
		return instance
	}, {})
}

export default Log
