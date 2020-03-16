
# Welcome to the Runnning the llvmPertub sample c programs using Emscripten

```
emcc -O1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 /home/tareq/Desktop/sampleexp/alex_attacks_c_emcc/challenge.c /home/tareq/Desktop/sampleexp/alex_attacks_c_emcc/chow_aes3_encrypt_wb.c -o 1_attacks/1.wasm
```
####Output:
![alt text](https://github.com/tareq97/Tasks/blob/master/emscripten/generatedfiles/llvmPerturb/images/1.png)

```
emcc -O1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 DemoKey_table_encrypt.c -o 1_attacks/2.html --preload-file DemoKey_table.bin
```
####Output:
![alt text](https://github.com/tareq97/Tasks/blob/master/emscripten/generatedfiles/llvmPerturb/images/2.png)


```
emcc -O1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 nosuchcon_2013_whitebox_noenc_generator.c -o 1_attacks/3_2.html --preload-file wbt_noenc
```
####Output:
![alt text](https://github.com/tareq97/Tasks/blob/master/emscripten/generatedfiles/llvmPerturb/images/4.png)


```
emcc -O1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 nosuchcon_2013_whitebox_noenc.c -o 1_attacks/3_1.html --preload-file wbt_noenc
```
####Output:
![alt text](https://github.com/tareq97/Tasks/blob/master/emscripten/generatedfiles/llvmPerturb/images/3.png)
