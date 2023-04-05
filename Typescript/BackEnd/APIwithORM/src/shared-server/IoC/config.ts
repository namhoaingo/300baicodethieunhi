import {IEnvironmentVars} from "../interfaces/IEnvironmentVars";
import {ILocalConfig} from "../interfaces/ILocalConfig";
import * as process from "process";
import {getEnvironmentVars} from "../../util/EnvironmentVars";

export interface ISharedConfig extends IEnvironmentVars {
    nodeEnv?: string;
    port?: number;
    serverUrl?: string;
    fileUploadSize?: number;
    databaseUrl?: string;
    databaseClient?: string;
    databasePoolMin?: number;
    databasePoolMax?: number;
    databaseTimeout?: number;
    databaseDebug?: boolean;
    redisUrl?: string;
    redisTls?: boolean;
    redisNamespace?: string;
    authBearerToken?: string;
    additionalExtensionBaseUrl?: string;
    show500?: boolean;
    maxThreadCount?: number;
    threadIdleTime?: number;
    threadLoopInterval?: number;
    locationUpdateInterval?: number;
    wlhUrl?: string;
    wlhEnvironment?: string;
    wlhAuthType?: string;
    wlhUsername?: string;
    wlhPassword?: string;
    jwtSecret?: string;
}

export const getSharedConfig = (localConfig: ILocalConfig): ISharedConfig =>{
    const {stringVars, numberVars, booleanVars} = localConfig;

    const stringConfigVarsCustom: string[] = [
        "NODE_ENV",
        "DATABASE_URL",
        "DATABASE_CLIENT",
        "SERVER_URL",
        "DATABASE_DEBUG",
        "REDIS_URL",
        "AUTH_BEARER_TOKEN",
        "WLH_URL",
        "WLH_ENVIRONMENT",
        "WLH_AUTH_TYPE",
        "WLH_USERNAME",
        "WLH_PASSWORD",
        "WLH_SECRET",
        ...stringVars
    ];

    const numberConfigVarsCustom: string[]= [
        "PORT",
        "FILE_UPLOAD_SIZE",
        ...numberVars
    ];

    const booleanConfigVarsCustom: string[] = [
        "REDIS_TLS",
        "DATABASE_DEBUG",
        ...booleanVars
    ]

    return getEnvironmentVars(process.env, {
        stringVars: stringConfigVarsCustom,
        numberVars: numberConfigVarsCustom,
        booleanVars: booleanConfigVarsCustom
    }) as ISharedConfig;
};