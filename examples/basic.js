import Log from 'log-2000'

// Create a logger. 
const log = Log()

// Test it out. 
log.info('Hello.')
log.warning({ firstName: 'Mick', status: 'About to overheat!' })
log.error({ message: 'Stop!' })
log.info({ level: 'alert', message: 'Overriding the level!' })

// {"level":"info","message":"Hello."}
// {"level":"warning","firstName":"Mick","status":"About to overheat!"}
// {"level":"error","message":"Stop!"}
// {"level":"alert","message":"Overriding the level!"}
