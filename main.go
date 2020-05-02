package main

import (
	"fmt"
	"syscall/js"
)

func main() {
	quit := make(chan struct{}, 0)

	fmt.Println("Hello, WebAssembly!")
	js.Global().Set("testFunction", js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		/*for _, arg := range args {
			println(arg.String())
		}*/
		return js.ValueOf(true)
	}))

	js.Global().Set("quit", js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		quit <- struct{}{}
		fmt.Println("Quit requested!")
		return nil
	}))

	<-quit
	fmt.Println("Program exit!")
}
