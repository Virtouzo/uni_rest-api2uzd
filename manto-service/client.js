var soap = require('soap');
var url = 'http://localhost:3001/wsdl?wsdl';

// Create client
soap.createClient(url, function (err, client) {
  if (err) {
    console.log('e1')
    throw err;
  }
  /* 
   * Parameters of the service call: they need to be called as specified
   * in the WSDL file
   */
  var args = {};
  // call the service
  client.getItems(args, function (err, res) {
    if (err)
      throw err;
    // print the service returned result
    console.log(res);
  });
});