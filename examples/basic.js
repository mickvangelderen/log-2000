import Log from '../src'

// Create a logger. 
const log = Log()

// Test it out. 
log.info({ firstName: 'Mick', passion: 'Creating useless node modules' })

log.warning('About to overheat!')
// {"level":"warning","date":"2016-01-22T15:32:31.663Z","message":"About to overheat!","data":{}}

log.error({ error: new Error('Failed to fetch user'), user: { id: '32jf90f23m' } })
// {"level":"error","date":"2016-01-22T15:32:31.663Z","message":"Failed to fetch user","data":{"user":{"id":"32jf90f23m"},"stack":"Error: Fai"}}
