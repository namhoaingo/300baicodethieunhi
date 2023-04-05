import {injectable} from "inversify";

export interface IApiServerService{
    startServer(): Promise<void>;
}

@injectable()
export class ApiServerService implements IApiServerService{
    constructor() {
        @inject("config") private _config: IShareConfig;
    }
}