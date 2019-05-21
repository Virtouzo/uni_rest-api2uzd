import Shop from "./shop";
import * as soap from "soap";
import * as fs from "fs";

export default function shopSOAP(shop: Shop, app) {
	const xml = fs.readFileSync("./shop/shop.wsdl", "utf8");

	const ShopService = {
		ShopService: {
			ShopPort: {
				getItems: function(args) {
					console.log("getting");
					return shop.get();
				}
			}
		}
	};

	soap.listen(app, "/wsdl", ShopService, xml, function() {
		console.log("soap started");
	});
}
