#Instruction set randomization for WebAssembly  

So the task here is to randomize the two Web assembly instructions such as 
Parametric instrution : drop  
Control instruction : loop

Randomized the above two instruction to drop_rand and loop_123 by changing the gen-s-parser.py file.
Below screenshots show how the wasm interpreter is adapted with drop_rand and loop_123
This file can regenerated using the gen-s-parser.py. By simple running the command pyhthon gen-s-parser.py

After the gen-s-parser.inc is generated it is placesd in the binaryen/src to 
