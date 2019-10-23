# Instruction set randomization for WebAssembly  

* Task here is to randomize the two Web assembly instructions such as 
    * Parametric instrution : drop  
    * Control instruction : loop

* Randomized the above two instruction to 
    * drop to drop_rand 
    * loop to loop_123.

Steps to adapt the wasm interpreter to understand drop_rand and loop_123  
**Step 1:** Find the file gen-s-parser.py in the [binaryen/scripts/gen-s-parser.py](https://github.com/WebAssembly/binaryen/tree/master/scripts)

**Step 2:** Updated the file with below shown code in the which will update the append the instruction with a tag [for example here the tag for drop is _rand and for loop it is _123]. So for now we have updated the code as shown below:






Below screenshots show how the wasm interpreter is adapted with drop_rand and loop_123
This file can regenerated using the gen-s-parser.py. By simple running the command pyhthon gen-s-parser.py

After the gen-s-parser.inc is generated it is placesd in the binaryen/src to 
