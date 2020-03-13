Summary:

BasicCABI.md



DynamicLinking.md

This documment 

EHScheme.md

ItaniumLikeC++ABI.md

Linking.md

ProducersSection.md:

This document contains the list of all the toolchains that are used to inform the user who are using the that tool for creating or accessing wasm files. In this document it also clearly mentioned how a producer of wasm tool can create a metadata for WASM tools or files using the Custom Section. This custom section do not contribute or effect the WebAssembly semantics but they only provide useful meta data that implementations can make use of to improve user experience or take compilation hints.

The convention of using the Custom section is given

name : name of the producer to be given as name type in WebAssembly.

The Custom section is first section in the module of WebAssembly.

Important References:
[webassembly in action](https://livebook.manning.com/book/webassembly-in-action/chapter-2/)
[Custom section WebAssembly](https://webassembly.github.io/spec/core/appendix/custom.html)
