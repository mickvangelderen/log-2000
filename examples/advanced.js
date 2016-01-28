import Log from 'log-2000'

// Writes messages to the console. 
const consoleWriter = (level, message) => {
	switch(level) {
		case 'herp': return console.warn(message)
		case 'derp': return console.error(message)
		default: return console.log(message)
	}
}

// Checks if data.error is an error and exposes the message and stack for serialization. 
const errorTransformer = data => {
	if (data && data.error && data.error instanceof Error) {
		// Let's mutate the data object!
		data.message = data.error.message
		data.stack = data.error.stack.slice(0, 10)
		delete data.error
	}
	return data
}

// Exposes the date.
const dateDecorator = (_) => ({ date: new Date() })

// Expose message properties in data directly.
const messageDecorator = data => {
	if (data.message) {
		// Remove the message property from data and expose it directly.
		const message = data.message
		delete data.message
		return { message }
	}
}

// Exposes the data.
const dataDecorator = data => ({ data })

// Transforms the exposed data before being passed to all writers. 
const jsonSerializer = data => JSON.stringify(data)

// Compose a logger. 
const log = Log({
	writers: [ consoleWriter ],
	transformers: [ errorTransformer ],
	decorators: [ dateDecorator, messageDecorator, dataDecorator ],
	serializers: [ jsonSerializer ],
	levels: [ 'info', 'herp', 'derp' ]
})

// Test it out. 
log.info({ firstName: 'Mick', passion: 'Creating useless node modules' })
log.herp({ message: 'About to overheat!' })
log.derp({ error: new Error('Failed to fetch user'), user: { id: '32jf90f23m' } })

// {"level":"info","date":"2016-01-22T16:43:19.875Z","data":{"firstName":"Mick","passion":"Creating useless node modules"}}
// {"level":"herp","date":"2016-01-22T16:43:19.891Z","message":"About to overheat!","data":{}}
// {"level":"derp","date":"2016-01-22T16:43:19.891Z","message":"Failed to fetch user","data":{"user":{"id":"32jf90f23m"},"stack":"Error: Fai"}}
