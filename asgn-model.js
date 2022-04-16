/**
 * asgn-model.js
 * Controller for scc-asgn-api application
 * Project 3
 * Name: Parker Weisbrich
 * COMP2150 Web Services
 */

const mongoose = require("mongoose");

var contactSchema = mongoose.Schema({
	courseName: String,
	assignmentName: {
		type: String,
		required: true
	},
	due_date:{
		type: Date,
		default: Date.now
	}
});

var Contact = module.exports = mongoose.model("assignments", contactSchema);
module.exports.get = function (callback, limit) {
	Contact.find(callback).limit(limit);
}