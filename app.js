const yargs = require("yargs");

const geoCode = require("./geoCode/geoCode");
const weather = require("./weather/weather");

var argv = yargs
  .options({
    a: {
      alias: "address",
      demand: true,
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geoCode.geoCodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results);
    weather.getWeather(
      results.latitude,
      results.longitude,
      (errorMessage, weatherResult) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(`It's currently ${weatherResult.temperature}`);
        }
      }
    );
  }
});
