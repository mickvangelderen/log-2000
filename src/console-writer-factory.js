const ConsoleWriter = (options = {}) => {
	const {
		transformers = []
	} = options
	return (level, data) => {
		data = transformers.reduce((d, f) => f(level, d), data)
		switch(level) {
			case 'warning': return console.warn(data) // eslint-disable-line no-console
			case 'error': return console.error(data) // eslint-disable-line no-console
			default: return console.log(data) // eslint-disable-line no-console
		}
	}
}

module.exports = ConsoleWriter
