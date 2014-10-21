var exec = require('child_process').exec;
var m = require('mraa');
var sensor = new m.Aio(0);
var sensorValue = sensor.read();
var url = '';
var sendValue = function () {
  console.log(sensor.read());
  exec('curl -d "sensor1="'+sensorValue+' '+url, function(err,stdout,stderr) {
  if (!err) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
    } else {
      console.log(err);
      console.log(err.code);
      console.log(err.signal);
    }
  });
  setTimeout(sendValue,1000);
}
sendValue();