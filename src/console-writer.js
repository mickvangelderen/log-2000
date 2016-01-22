/* eslint-disable no-console */

export const consoleWriter = (level, message) => {
	switch(level) {
		case 'warning': return console.warn(message)
		case 'error': return console.error(message)
		default: return console.log(message)
	}
}

export default consoleWriter
