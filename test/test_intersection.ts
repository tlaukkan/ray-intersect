import {expect} from 'chai';
import instantiateRayIntersectModule from "../src/ray_intersect";
import newGo from "../src/wasm_exec";

describe('Test intersect.', () => {

  it('Should test intersect.', async () => {
    console.log(instantiateRayIntersectModule);
    const go = newGo();
    console.log(go.importObject);
    const instance = await instantiateRayIntersectModule(go.importObject);
    await go.run((instance as any).instance);
    console.log((global as any).testFunction);
    const result = (global as any).testFunction(1);
    expect(result).eq(true);
    (global as any).quit();
  }).timeout(10000);

});
