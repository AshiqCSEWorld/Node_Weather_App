var request = require("request");

var getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}?units=si`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode == "200") {
        callback(undefined, {
          temperature: body.currently.temperature
        });
      }
    }
  );
};

module.exports.getWeather = getWeather;
