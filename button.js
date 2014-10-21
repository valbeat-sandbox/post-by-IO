var exec = require('child_process').exec;
var m = require('mraa');
var goodButoon = new m.Gpio(5);
var butButton = new m.Gpio(3);
var url = '';
goodButton.dir(m.DIR_IN);
butButton.dir(m.DIR_IN);
var isGood = false;
var isBut = false;
var sendValue = function () {
  isGood = goodButton.read();
  isBut = butButton.read();
  if (isGood || isBut) {
    if (isGood) {
      sensorValue = '"button1 = true"';
    }
    else if (isBut) {
      sensorValue = '"button2 = true"';
    }
    exec('curl -d '+sensorValue+' '+url, function(err,stdout,stderr) {
    if (!err) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
    } else {
      console.log(err);
      console.log(err.code);
      console.log(err.signal);
    }
  }  
  setTimeout(sendValue,100);
}
sendValue();