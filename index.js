var bcrypt = require('bcrypt-nodejs');
var redis = require('redis');
var client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

module.exports = {
	createInvitation: function (email, inviter, cb) {
		var now = new Date();
		var hashValues = (now + email + inviter).toString();
		var inviteHash = bcrypt.hash(hashValues, null, null, function (err, hash) {
			if (err) {
				cb(err);
			} else {
				client.HMSET(hash, {
					"email" : email,
					"inviter" : inviter,
					"hash" : hash
				}, function (err, res) {
					if (err) {
						cb(err);
					} else {
						cb(null, hash);
					}
				});
			}
		});
	},
	findInvitation: function (hash, cb) {
		client.hgetall(hash, function (err, obj) {
		    if (err) {
		    	cb(err);
		    } else {
		    	cb(null, obj);
		    }
		});
	}
};