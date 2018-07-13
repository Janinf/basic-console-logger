# basic-console-logger
A simple console logger with timestamp.

## Installation
`npm install basic-console-logger`

## Usage

### Log Levels
```
const logger = require('basic-console-logger');

logger.info('Some information');
logger.warning('This is a warning');
logger.error(new Error('This is an error'));
```

![Example result for log levels](https://github.com/Janinf/basic-console-logger/blob/master/images/log-levels.PNG)

### Log Requests
```
const express = require('express');
const logger = require('basic-console-logger');

const app = express();

app.use((req, res, next) => {
    logger.request(req);
    next();
});

app.listen(3000);
```

![Example result for log levels](https://github.com/Janinf/basic-console-logger/blob/master/images/request.PNG)

## API
### Methods
`info(message)`
Logs an info message with a timestamp to the console
* Parameters
    * <code>message</code>: A message of type string
    
`warning(message)`
Logs a warning message with a timestamp to the console
* Parameters
    * <code>message</code>: A message of type string
    
`error(error)`
Logs an error message with a timestamp to the console
* Parameters
    * <code>error</code>: An error or a message of type string
    
`request(req)`
Logs an http request to the console. Format: \<method> \<path>
* Parameters
    * <code>req</code>: An express request object.
