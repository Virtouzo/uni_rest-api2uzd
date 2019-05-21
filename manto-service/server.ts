import * as express from "express";
import Shop from "./shop/shop";
import shopAPI from "./shop/shopAPI";
import shopSOAP from "./shop/shopSOAP";
import errorHandler from "./util/errHandler";

let app = express();

let shop = new Shop();
shop.add({ name: "Test1", price: 1 });
shop.remove(0);
shop.add({ name: "Very expensive item", price: 10 });
shop.add({ name: "Book", price: 3.5 });
shop.add({ name: "Computer", price: 9 });

app.use("/shop", shopAPI(shop));
app.use(errorHandler);

app.get("/", (req, res) => {
	res.send("Atsiskaitymas 3. API: localhost/shop");
});

app.listen(3001, function() {
	shopSOAP(shop, app);
	console.log("Server started!");
});
