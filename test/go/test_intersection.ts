import {expect} from 'chai';
import instantiateRayIntersectModule from "../../src/go/ray_intersect";
import newGo from "../../src/go/wasm_exec";

describe('Test intersect.', () => {

  it('Should test intersect.', async () => {
    console.log(instantiateRayIntersectModule);
    const go = newGo();
    console.log(go.importObject);
    const instance = await instantiateRayIntersectModule(go.importObject);

    go.run((instance as any).instance).then(r => {});

    while(!(global as any).rayIntersectModuleBinding) {
      await sleep(50);
      console.log("waiting go module to bind.");
    }

    console.log((global as any).rayIntersectModuleBinding.testFunction);
    //const result = (global as any).rayIntersectModuleBinding.testFunction(1);
    const result = await testFunctionPromise(1);
    console.log("testFunction result: " + result);
    expect(result).eq(true);
    console.log(result);
    (global as any).rayIntersectModuleBinding.quit();
  }).timeout(10000);

});

function sleep(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

function testFunctionPromise(i: number) {
  return new Promise((resolve, reject) => {
    (global as any).rayIntersectModuleBinding.testFunction(i, (err: any, message: string) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(message);
    });
  });
}