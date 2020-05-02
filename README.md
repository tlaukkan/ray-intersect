# Ray Intersect

Golang ray intersection implementation.

## Buid

    GOOS=js GOARCH=wasm go build -o src/ray_intersect.wasm && npx wasm-to-js-module src/ray_intersect.wasm src/ray_intersect.js
    
## WASM to js module

