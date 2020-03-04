const Module = require('./100_doors');

Module['onRuntimeInitialized'] = function() {
           
                    console.log("wasm loaded ");

                    var main = Module.cwrap("main","number",null);
                    var result = main();
                    console.log(result);
                    console.log("main method in WASM executed:")
                }