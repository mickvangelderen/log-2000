/* eslint-disable no-console */
import jsonSerializer from './json-serializer'

const ConsoleWriter = (options = {}) => {
	const { serializer = jsonSerializer } = options
	return (level, data) => {
		const message = serializer(data)
		switch(level) {
			case 'warning': return console.warn(message)
			case 'error': return console.error(message)
			default: return console.log(message)
		}
	}
}

export default ConsoleWriter
