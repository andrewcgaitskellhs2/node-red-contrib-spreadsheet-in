module.exports = function(RED) {
	const util = require('util');

	function ListOfSheetsIteratorNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			msg.payload = msg.payload.SheetNames;
			node.send(msg);
		});
	}
	RED.nodes.registerType("list-of-sheets",ListOfSheetsNode);
}
