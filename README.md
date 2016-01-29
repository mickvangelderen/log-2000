# log-2000

log-2000 is the result of an attempt at creating a highly customizable logger with an interface that is easy to extend. 

# Installation

```bash
npm install --save log-2000
```

# Usage

```js
var Log = require('log-2000')

var log = Log()

log.info('Hello.')
```

Will print

```
{ level: 'info',
  date: Fri Jan 29 2016 09:25:10 GMT+0100 (W. Europe Standard Time),
  message: 'Hello.' }
```

# Examples

Examples can be found [here](examples/). To play with them:

```bash
git clone https://github.com/mickvangelderen/log-2000.git
cd log-2000/examples
npm install
node basic
```

# Customizing log-2000

With log-2000, you can customize log levels, what is being logged and where it is being logged. 

The default configuration of log-2000 can be viewed in [`log-factory`](src/log-factory.js).

## Customizing levels

The levels can be customized like this: 

```js
var Log = require('log-2000')

var log = Log({
  levels: [ 'my', 'own', 'levels' ]
})

log.my('hello!')
```

## Customizing writers

These are the writers log-2000 provides:
 * [`console-writer`](src/console-writer.js)

```
var Log = require('log-2000')
var consoleWriter = require('log-2000/lib/console-writer')

var log = Log({
  writers: [ consoleWriter ]
})
```

## Customizing transformers

These are the transformers log-2000 provides:
 * [`attach-date`](src/attach-date.js)
 * [`attach-level`](src/attach-level.js)
 * [`coerce-string-to-object`](src/coerce-string-to-object.js)
 * [`coerce-anything-to-object`](src/coerce-anything-to-object.js)
 * [`json-serializer`](src/json-serializer.js)

```
var Log = require('log-2000')
var attachDate = require('log-2000/lib/attach-date')

var log = Log({
  transformers: [ attachDate ]
})
```

# Extending log-2000

Nowadays, extensibility is important because there are so many talented and ingenious people out there and node is being used for an increasing variety of tasks. 

## Creating writers

A writer is simply a function that accepts a `level` and `data` parameter. The function `myWriter` in the following code for example is a writer. 

```js
function myWriter(level, data) {
  console.log(level, data)  
}
```

For more interesting writers I recommend using the factory pattern. Check the default [console writer](src/console-writer.js) for an example. 

It would be nice if all writer factories accepted a `transformers` option that transforms incoming data like this:

```js
data = transformers.reduce((d, f) => f(level, d), data)
```

This ensures that a user can transform the data exactly how they want for each writer. For example one might want to log human readable messages to the console and JSON lines to a file. 

## Creating transformers

A transformer is simply a function that accepts a `level` and `data` parameter and returns a new `data` object. The following code for example is a transformer. 

```js
function myTransformer(level, data) {
  return Object.assign({ level: level }, data)
}
```
