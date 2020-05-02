import {expect} from 'chai';
import {instantiateModule} from "../src/wasm_util";

describe('Test intersect.', () => {

  it('Should test intersect.', async () => {
    const instance = await instantiateModule();

    let result = (global as any).rayIntersectModuleBinding.testFunction(1);
    expect(result).eq(true);

  }).timeout(10000);

});

function sleep(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

