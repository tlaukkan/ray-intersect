import "./wasm_exec.js"
import {Go} from "./wasm_exec";
import main from "./main";

export function newGo(): Go {
    if (typeof(global)!=="undefined") {
        return new (global as any).Go();
    }
    if (typeof(window)!=="undefined") {
        return new (window as any).Go();
    }
    throw new Error("No go implementation.");
}

export async function instantiateModule() {
    const go = newGo();
    const instance = await main(go.importObject);
    go.run((instance as any).instance).then(r => {
    });
    return instance;
}