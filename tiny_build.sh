#!/usr/bin/env bash
cwd=$(pwd)
docker run -v $cwd:/project tinygo/tinygo:0.13.1 tinygo build -o /project/src/tinygo/main.wasm -target wasm --no-debug /project/src/tinygo/main.go
npx wasm-to-js-module src/tinygo/main.wasm src/tinygo/ray_intersect.js