#!/usr/bin/env bash
cwd=$(pwd)
docker run -v $cwd:/project tinygo/tinygo:0.13.1 /bin/bash -c "cp /usr/local/tinygo/targets/wasm_exec.js /project/src/tiny"