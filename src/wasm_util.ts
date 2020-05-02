import "./wasm_exec.js"
import {Go} from "./wasm_exec";
import Instance = WebAssembly.Instance;

interface Module {
    (importObject: any): Promise<Instance>
}

export function newGo(): Go {
    if (typeof(global)!=="undefined") {
        return new (global as any).Go();
    }
    if (typeof(window)!=="undefined") {
        return new (window as any).Go();
    }
    throw new Error("No go implementation.");
}


export async function instantiateModule<T>(module: Module): Promise<T> {
    const go = newGo();
    const instance = await module(go.importObject);
    go.run((instance as any).instance).then(r => {});

    // Wait for binding to become available.
    while (!(global as any).rayIntersectModuleBinding) {
        await sleep(50);
    }

    return (global as any).rayIntersectModuleBinding as T;
}

function sleep(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

