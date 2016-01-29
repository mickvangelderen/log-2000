# log-2000

log-2000 is the result of an attempt at creating a highly customizable logger with an interface that is easy to extend. 

# Installation

```bash
npm install --save log-2000
```

# Usage

```js
import Log from 'log-2000'

const log = Log()

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

# Customizing

## Default writers

## Default transformers

# Extending

## Custom writers

## Custom transformers
