const um = require('./um.js');
const dois = require('./dois.js');
const tres = require('./tres.js');

const nove = require('./nove.js');

function run(app) {
  um.run(app);
  dois.run(app);
  tres.run(app);

  nove.run(app);
}

module.exports = { run };
