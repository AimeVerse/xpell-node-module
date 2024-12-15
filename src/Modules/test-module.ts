import { XCommand, XModule, XModuleData } from "xpell-node"




export class _TestModuleClass extends XModule {

    constructor(data:XModuleData){ 
        super(data)
    }    
    

    // only functions that start with _ are exposed to the Xpell
    async _info(xcmd:XCommand){
        return "Hello from Test Module"
    }
    
    /**
     * Add two numbers
     * @param xcmd params should have x and y
     * @returns sum of x and y`
     */
    async _add(xcmd:XCommand){
        return <any>xcmd._params.x + xcmd._params.y;
    }
}

export const TestModule = new _TestModuleClass({_name:"test-module"});