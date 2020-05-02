import {expect} from 'chai';
import {instantiateModule} from "../src/wasm_util";
import main from "../src/main";
import {MainInterface} from "../src/MainInterface";

describe('Test intersect.', () => {

  it('Should test intersect.', async () => {
    const mainInterface: MainInterface = await instantiateModule(main);

    let result = mainInterface.testFunction(1);
    expect(result).eq(true);

  }).timeout(10000);

});
