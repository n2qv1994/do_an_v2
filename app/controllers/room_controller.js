var zone_services = require("../services/zone_service.js");
var jwt           = require('jsonwebtoken');
var config        = require('../../config/config.js');

exports.get_rooms = function(req, res) {
	zone_services.get_zones(function(error, result) {
		if(error) {
			return res.status(result.status_code).json({
				"error": {
					"data": result.data
				},
				"status_code": result.status_code
			});
		}
		return res.status(result.status_code).json({
			"success": {
				"data": result.data,
			},
			"status_code": result.status_code
		});
	});
};