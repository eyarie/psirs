var individual = require('./individual.js'),
     corporate = require('./corporate.js');

function route(app){

individuals.route(app);
corporate.route(app);

}

module.exports.route = route;
