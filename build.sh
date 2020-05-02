#!/usr/bin/env bash
cwd=$(pwd)
docker run -v $cwd:/project tinygo/tinygo:0.13.1 tinygo build -o /project/src/main.wasm -target wasm --no-debug /project/src/main.go
npx wasm-to-js-module src/main.wasm src/main.js