const Module = require('./ln');

Module['onRuntimeInitialized'] = function() {
  console.log("wasm loaded ");

  var agm = Module.cwrap("leonardo",null,["number","number","number","number"]);
  agm(1,1,1,25);
  //console.log(result);
  };
