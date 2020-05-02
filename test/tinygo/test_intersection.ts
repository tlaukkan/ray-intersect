import {expect} from 'chai';
import instantiateRayIntersectModule from "../../src/tinygo/ray_intersect";
import newGo from "../../src/tinygo/wasm_exec";

describe('Test intersect.', () => {

  it('Should test intersect.', async () => {
    console.log(instantiateRayIntersectModule);
    const go = newGo();
    console.log(go.importObject);
    const instance = await instantiateRayIntersectModule(go.importObject);
    go.run((instance as any).instance).then(r => {});

    console.log((instance as any).module);
    console.log((instance as any).instance.exports.test);

    console.log((global as any).rayIntersectModuleBinding.testFunction);
    //const result = (global as any).rayIntersectModuleBinding.testFunction(1);
    let result = (global as any).rayIntersectModuleBinding.testFunction(1);
    console.log("testFunction result: " + result);
    expect(result).eq(true);

    //const result = (global as any).rayIntersectModuleBinding.testFunction(1);
    result = (instance as any).instance.exports.test(1);
    console.log("testFunction result: " + result);
    console.log(result);
  }).timeout(10000);

});

function sleep(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

