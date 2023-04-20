import {Container, ContainerModule, interfaces} from "inversify";
import {ILocalConfig} from "../interfaces/ILocalConfig";

let sharedContainer: Container;

export const core = (localConfig: ILocalConfig) =>{
    return new ContainerModule((bind: interfaces.Bind) =>{
        if (process.env.NODE_DEV === "test"){
            bind("ServerInstanceTest").to(ServerInstanceTest);
        }
    })
}