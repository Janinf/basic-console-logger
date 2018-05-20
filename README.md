# basic-console-logger
A simple console logger using ansii color codes.

## Installation
`npm install basic-console-logger`

## Usage

### Log Levels
```
const logger = require('basic-console-logger');

logger.info('Some information');
logger.warning('This is a warning');
logger.error('This is an error');
```

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

## API
### Methods
`info(message)`
Logs a green message with a timestamp to the console
* Parameters
    * <code>message</code>: A message of type string
    
`warning(message)`
Logs a yellow message with a timestamp to the console
* Parameters
    * <code>message</code>: A message of type string
    
`error(message)`
Logs a red message with a timestamp to the console
* Parameters
    * <code>message</code>: A message of type string
    
`request(req)`
Logs an http request to the console in cyan. Format: \<method> \<path>
* Parameters
    * <code>req</code>: An express request object.
