var request = require("request");
var options = {
  method: "GET",
  url: "http://192.168.1.22/D1/0",
  headers: {},
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
