# Ray Intersect

Golang ray intersection implementation.

## Buid with Go

    GOOS=js GOARCH=wasm go build -o src/ray_intersect.wasm && npx wasm-to-js-module src/ray_intersect.wasm src/ray_intersect.js
    
## Build with TinyGo

    docker pull tinygo/tinygo:0.13.1
    
