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
		writers = [ consoleWriter ]
	} = options
	const log = level => (
		data => {
			data = transformers.reduce((d, f) => f(d), data)
			data = Object.assign({ level }, ...decorators.map(f => f(data)))
			data = serializers.reduce((d, f) => f(d), data)
			writers.map(f => f(level, data))
		}
	)
	return {
		info: log('info'),
		warning: log('warning'),
		error: log('error')
	}
}

export default Log
