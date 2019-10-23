# Instruction set randomization for WebAssembly  

* Task here is to randomize the two Web assembly instructions such as 
    * Parametric instrution : drop  
    * Control instruction : loop

* Randomized the above two instruction to 
    * drop to drop_rand 
    * loop to loop_123.
    
Below steps show how the wasm interpreter is adapted with drop_rand and loop_123. 

**STEP 1:** Find the file gen-s-parser.py in the [binaryen/scripts/gen-s-parser.py](https://github.com/WebAssembly/binaryen/tree/master/scripts)

**STEP 2:** Update the method named instruction_parser() in gen-s-parser.py file with below shown code. It will update the instruction with a tag [for example here the tag for drop is _rand and for loop it is _123]. So for now updated the code as shown below in the gen-s-parser.py file:
 
  
      if inst == "drop":
         inst = inst + "_rand"        
      else:
         if inst == "loop":
            inst = inst + "_123"

**STEP 3:** Run the file gen-s-parser.py in the [binaryen/scripts/gen-s-parser.py](https://github.com/WebAssembly/binaryen/tree/master/scripts) using the command 

      python gen-s-parser.py > ../src/gen-s-parser.inc

The gen-s-parser.py run and emit C++ code.After the gen-s-parser.inc is generated, it is placed in the binaryen/src to

**STEP 4:** Using cmake and instruction given in [binaryen](https://github.com/WebAssembly/binaryen) we can build all the tools supported by binaryen compiler such as wasm2js, wasm-opt , wasm-shell etc., [information regarding this tools is given in the [binaryen](https://github.com/WebAssembly/binaryen)]

**STEP 5:** After the tools are build use wasm-shell[which can load and interpret WebAssembly code] to check whether the binaryen compiler is adapted to changes or not. Here there two input files are taken one which fails the interpretation and other which passes interpretation successfully.

[wasmbackend_copy : file which has instruction drop and loop](https://github.com/tareq97/Tasks/blob/master/math_functions/wasmbackend_copy.wast)--------Fails

<img src="https://github.com/tareq97/Tasks/blob/master/screenshots/2.PNG">

[wasmbackend_copy-randomized_droploop.wast
 : file which has instruction drop_rand and loop_123](https://github.com/tareq97/Tasks/blob/master/math_functions/wasmbackend_copy-randomized_droploop.wast)--------Passes

<img src="https://github.com/tareq97/Tasks/blob/master/screenshots/3.PNG">

**NOTE**:
   * Done above mentioned changed in the binaryen compiler folder and uploaded the whole folder.
   [drop and loop randomized](https://github.com/tareq97/Tasks/tree/master/randomized_binaryen)
   * Also uploaded the specfic file related to changes in the binaryen compiler to adapt the intrepretion of wasm files
   [Changes done is specific files in binayen](https://github.com/tareq97/Tasks/tree/master/specific_changes_in%20binaryen)
