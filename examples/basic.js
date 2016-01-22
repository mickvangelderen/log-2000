import Log from '../src'

// Create a logger. 
const log = Log()

// Test it out. 
log.info('Hello.')
log.warning({ firstName: 'Mick', status: 'About to overheat!' })
log.error({ message: 'Stop!' })

// {"level":"info","message":"Hello."}
// {"level":"warning","data":{"firstName":"Mick","status":"About to overheat!"}}
// {"level":"error","message":"Stop!"}
