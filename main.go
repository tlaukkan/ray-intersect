package main

import (
	"fmt"
	"syscall/js"
)

func main() {
	quit := make(chan struct{}, 0)

	fmt.Println("Hello, WebAssembly!")

	moduleBindingMap := make(map[string]interface{})
	moduleBindingJsObject := js.ValueOf(moduleBindingMap)

	moduleBindingJsObject.Set("testFunction", js.FuncOf(func(this js.Value, args []js.Value) interface{} {

		fmt.Println("Test function!")

		callback := args[len(args)-1:][0]
		/*for _, arg := range args {
			println(arg.String())
		}*/

		go func() {
			callback.Invoke(js.Null(), js.ValueOf(true))
		}()

		return nil
	}))

	moduleBindingJsObject.Set("quit", js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		fmt.Println("Quit requested!")
		quit <- struct{}{}
		return nil
	}))

	js.Global().Set("rayIntersectModuleBinding", moduleBindingJsObject)

	<-quit
	fmt.Println("Program exit!")
}
