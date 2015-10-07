var nconf = require('nconf'),
    fs = require('fs');

if (fs.existsSync('./config.js')) {
    nconf.argv().env().file({ file: './.config.json' });
} else {
    nconf.argv().env();
}

module.exports = nconf;
