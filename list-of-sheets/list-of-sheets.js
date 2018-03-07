module.exports = function(RED) {
	const util = require('util');

	function ListOfSheetsNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var msgfile = msg.payload;
			msg.payload = msg.payload.SheetNames;
			node.send(msgfile,msg);
		});
	}
	RED.nodes.registerType("list-of-sheets",ListOfSheetsNode);
}
