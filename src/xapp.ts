//import Xpell-Node
import {Xpell as _x, _xlog} from 'xpell-node';
import { TestModule } from './Modules/test-module.js';



async function main() {
    _x._verbose = true;
    _xlog.log('starting xapp ;)')
    _x.loadModule(TestModule);

    /*
     * Call the _info function from the test-module
     */
    const xcommand = {
        _module: "test-module",
        _op: "info"    
    }

    const res = await _x.execute(xcommand);
    _xlog.log( res)
    

    /*
     * Call the _add function from the test-module
     */

    const xcommand2 = {
        _module: "test-module",
        _op: "add",
        _params: {
            x: 10,
            y: 20
        }
    }

    const res2 = await _x.execute(xcommand2);
    _xlog.log("Result of _add(" + xcommand2._params.x + "," + xcommand2._params.y +") = "  ,res2)



    //start Xpell-node server
    //_x.start();

}

main();
