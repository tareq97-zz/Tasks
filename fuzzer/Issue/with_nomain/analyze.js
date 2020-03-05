const Module = require('./ln');

Module['onRuntimeInitialized'] = function() {
  console.log("wasm loaded ");

  var leonardo = Module.cwrap("leonardo",null,["number","number","number","number"]);
  leonardo(1,1,1,25);
  };
