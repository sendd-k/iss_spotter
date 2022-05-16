const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const time = new Date(0);
    time.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${time} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(passTimes);
});
