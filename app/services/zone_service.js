var zone_helper     = require("../helpers/zone_helper.js");
var Utils           = require("../utils/utils");

var Zone_Services = {

};

Zone_Services.add_zone = function(room_name) {
	zone_helper.find_zone(room_name)
	.then(function(message) {
	    var zone = message.data;
	    if(!zone) {    
	     	zone_helper.add_zone(room_name);
	    }
	    else {
	      console.log("*** zone existed ***");
	    }
	 })
	 .catch(function(message_error) {
	    Utils.log(message_error.error);
	 });
};

Zone_Services.update_http_zone = function(room_name) {
	zone_helper.find_zone(room_name)
	.then(function(message) {
	    var zone = message.data;
	    if(zone) {    
	     	zone_helper.update_http_zone(zone);
	    }
	    else {
	      console.log("*** not found zone  ***");
	    }
	 })
	 .catch(function(message_error) {
	    Utils.log(message_error.error);
	 });
};

Zone_Services.update_peer_zone = function(room_name) {
	zone_helper.find_zone(room_name)
	.then(function(message) {
	    var zone = message.data;
	    if(zone) {    
	     	zone_helper.update_peer_zone(zone);
	    }
	    else {
	      console.log("*** not found zone  ***");
	    }
	 })
	 .catch(function(message_error) {
	    Utils.log(message_error.error);
	 });
};

Zone_Services.get_zones = function(callback) {
	zone_helper.get_zones()
	.then(function(message) {
		var zones = message.data;
		return callback(false, {data: zones, status_code: 200, status: "success"});
	})
	.catch(function(message_error) {
		Utils.log(message_error.error);
		return callback(true, {data: message_error.error, status_code: 500, status: "error"});
	})
}
module.exports = Zone_Services;