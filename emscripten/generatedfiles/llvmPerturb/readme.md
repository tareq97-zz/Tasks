
# Welcome to the Runnning the llvmPertub sample c programs using Emscripten

```
emcc -O1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 /home/tareq/Desktop/sampleexp/alex_attacks_c_emcc/challenge.c /home/tareq/Desktop/sampleexp/alex_attacks_c_emcc/chow_aes3_encrypt_wb.c -o 1_attacks/1.wasm
```
####Output:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

```
emcc -O1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 DemoKey_table_encrypt.c -o 1_attacks/2.html --preload-file DemoKey_table.bin
```
####Output:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

```
emcc -O1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 nosuchcon_2013_whitebox_noenc.c -o 1_attacks/3_1.html --preload-file wbt_noenc
```
####Output:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

```
emcc -O1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 nosuchcon_2013_whitebox_noenc_generator.c -o 1_attacks/3_2.html --preload-file wbt_noenc
```
####Output:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
