var Log = require('log-2000')

// Create a logger. 
var log = Log()

// Test it out. 
log.info('Hello.')
log.warning({ firstName: 'Mick', status: 'About to overheat!' })
log.error({ message: 'Stop!' })
