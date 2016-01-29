var Log = require('log-2000')

// Create a logger. 
var log = Log()

// Test it out. 
log.info('Hello.')
log.warning({ firstName: 'Mick', status: 'About to overheat!' })
log.error({ message: 'Stop!' })
log.info({ level: 'alert', message: 'Overriding the level!' })

// { level: 'info',
//   date: Fri Jan 29 2016 09:25:10 GMT+0100 (W. Europe Standard Time),
//   message: 'Hello.' }
// { level: 'warning',
//   date: Fri Jan 29 2016 09:25:10 GMT+0100 (W. Europe Standard Time),
//   firstName: 'Mick',
//   status: 'About to overheat!' }
// { level: 'error',
//   date: Fri Jan 29 2016 09:25:10 GMT+0100 (W. Europe Standard Time),
//   message: 'Stop!' }
// { level: 'alert',
//   date: Fri Jan 29 2016 09:25:10 GMT+0100 (W. Europe Standard Time),
//   message: 'Overriding the level!' }
