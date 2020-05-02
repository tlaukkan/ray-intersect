package main

import (
	"fmt"
	"syscall/js"
)

func main() {
	fmt.Println("Hello, WebAssembly!")

	moduleBindingMap := make(map[string]interface{})
	moduleBindingJsObject := js.ValueOf(moduleBindingMap)

	moduleBindingJsObject.Set("testFunction", js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		fmt.Println("Test function!:" + args[0].String())
		return js.ValueOf(true)
	}))

	js.Global().Set("rayIntersectModuleBinding", moduleBindingJsObject)

}
