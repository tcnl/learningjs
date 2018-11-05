
var url = 'http://mylogger.io/log';

function log(message) {
	//Send HTTO request
	console.log(message);
}

//module.exports.log = log; //objeto todo
module.exports = log; //só a funcao
//module.exports.endPoint = url;