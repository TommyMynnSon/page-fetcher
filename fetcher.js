// Require(s)
const request = require('request');
const fs = require('fs');
const { getArguments } = require('./getArguments');

// Get url and path from command line
const { url, path } = getArguments();

// Make request with given url and path
request(`${url}`, (error, response, body) => {
  if (error) {
    console.log('request error:', error);
  }

  // Write body received from request to local path
  fs.writeFile(path, body, error => {
    if (error) {
      console.log('writeFile error:', error);
    }

    // Output file size in bytes of local path after writing received body from http request to it
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});