module.exports = function(RED) {
	const XLSX = require('xlsx');

	function BookNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var option = {
				type: typeof msg.payload === "string" ? "string" : "buffer",
				raw: false,
				dateNF: "yyyy-mm-dd",
				cellDates: true,
				password: undefined,
				WTF: true,
			};
			msg.payload = XLSX.read(msg.payload, option);
			node.send(msg);
		});
	}
	RED.nodes.registerType("book",BookNode);
}
