var Log = require('log-2000')
var attachDate = require('log-2000/lib/attach-date')
var attachLevel = require('log-2000/lib/attach-level')
var jsonSerializer = require('log-2000/lib/json-serializer')

// Writes messages to the console. 
var consoleWriter = (level, message) => {
	switch(level) {
		case 'herp': return console.warn(message)
		case 'derp': return console.error(message)
		default: return console.log(message)
	}
}

// Checks if data.error is an error and exposes the message and stack for serialization. 
var errorTransformer = (level, data) => {
	if (data && data.error && data.error instanceof Error) {
		return Object.assign({}, data, {
			error: {
				message: data.error.message,
				stack: data.error.stack.slice(0, 10)
			}
		})
	}
	return data
}

// Compose a logger. 
var log = Log({
	transformers: [ errorTransformer, attachDate, attachLevel, jsonSerializer ],
	writers: [ consoleWriter ],
	levels: [ 'info', 'herp', 'derp' ]
})

// Test it out. 
log.info({ firstName: 'Mick', passion: 'Creating useless node modules' })
log.herp({ message: 'About to overheat!' })
log.derp({ error: new Error('Failed to fetch user'), user: { id: '32jf90f23m' } })
