import {IEnvironmentVars} from "../shared-server/interfaces/IEnvironmentVars";
import {ILocalConfig} from "../shared-server/interfaces/ILocalConfig";
import {dataType} from "../shared-server/types";
import _ from "lodash";

/*
Nam Note:
environmentVars is actually comes from process.env
Basically, this function reads data from process.env and also puts it on the IEnvironmentVars
So that we can use dependency injection for it.

This is similar to Dotnet, but Dotnet with IOptions takes care of this automatically for us
 */
export const getEnvironmentVars = (environmentVars: dataType, localConfig: ILocalConfig): IEnvironmentVars => {
    const {
        stringVars: stringConfigVarsCustom,
        numberVars: numberConfigVarsCustom,
        booleanVars: booleanConfigVarsCustom
    } = localConfig

    const config: dataType = {};

    stringConfigVarsCustom.forEach((configKey) =>{
        const strVar = environmentVars[configKey];
        if(strVar === undefined){
            throw new Error(`Environment variable '${configKey}' missing`);
        }

        const camelCaseKey = _.camelCase(configKey);
        config[camelCaseKey] = strVar.replace(/\\n/g, "\n");
    });

    numberConfigVarsCustom.forEach((configKey) =>{
        const strVal = environmentVars[configKey];

        if(strVal === undefined){
            throw new Error(`Environment variable '${configKey}' missing`);
        }
        const numVal = parseInt(strVal, 10);
        if(Number.isNaN(numVal)){
            throw new Error(`Environment variable '${configKey}' is not a valid number`);
        }

        const camelCaseKey = _.camelCase(configKey);
        config[camelCaseKey] = numVal;
    })

    booleanConfigVarsCustom.forEach((configKey: string) =>{
        const strVal = environmentVars[configKey];
        if (strVal === undefined){
            throw new Error(`Environment variable '${configKey}' missing`);
        }

        const camelCaseKey = _.camelCase(configKey);
        if(strVal === "true"){
            config[camelCaseKey] = true;
            return;
        }

        if(strVal === "false"){
            config[camelCaseKey] = false;
            return;
        }

        throw new Error(`Environment variable '${configKey}' is not true/false`);
    });

    return config as IEnvironmentVars;
}

