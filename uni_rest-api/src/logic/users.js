const req = require("request-promise");
const Promise = require("bluebird");
const _ = require("lodash");

function attachItemsToUser(user) {
	const itemIds = user.items.map(item => item.id);

	return Promise.try(() => {
		return req({
			uri: `http://localhost:3001/shop/multiple`,
			body: {
				items: itemIds
			},
			json: true
		});
	})
		.then(body => {
			console.log("received resp");
			console.dir(body);
			if (body.error) throw new Error(body.message);
			console.log("received items resp: ");
			console.dir(body);
			user.items = body;
			return user;
		})
		.catch(function(resp) {
			throw resp.error;
		});
}

module.exports = {
	attachItemsToUser
};
