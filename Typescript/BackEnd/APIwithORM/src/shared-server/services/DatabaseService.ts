import {knex, Knex} from "knex";
import {inject, injectable} from "inversify";
import {ISharedConfig} from "../IoC/config";

export interface IDatabaseService{
    connect():void;
    getConnection(): void;
    migrate(): Promise<void>;
    seed(): Promise<void>;
    destroy(): Promise<boolean>;
    pagination(queryBuilder: Knex.QueryBuilder,
               query: IAbstractQuery,
               options?:IMethodOptions,
               countIndex?: string
               ): Promise<IPaginated>;
}


/*
Database Service
 */

@traceLogging("DatabaseService")
@injectable()
export class DatabaseService implements IDatabaseService{
    private db: Knex | null = null;

    constructor(@inject("config") private _config: ISharedConfig) {

    }

    /*
    Connect to Database
     */
    public connect(): void {
        this.db = knex({
            client: this._config.databaseClient,
            debug: this._config.databaseDebug,
            connection: this._config.databaseUrl,
            pool:{
                min: this._config.databasePoolMin,
                max: this._config.databasePoolMax
            },
        });
    }

    /**
     * get the current DB connection
     * @return {Knex}
     */
    public getConnection(): Knex {
        if(this.db == null){
            throw new Error("DB has not connected yet");
        }

        return this.db;
    }

    /**
     * Migrate the latest schema into the database
     *
     * @return(Promise<void>)
     */

    public async migrate(): Promise<void> {
        if(this.db == null){
            throw new Error("DB has not connected yet");
        }

        await this.db.migrate.latest();
    }

    /**
     * Seed the latest data
     */
    public async seed(){
        if(this.db == null){
            throw new Error("DB has not connected yet");
        }

        await this.db.seed.run();
    }

    /**
     * Destroy DB
     */
    public destroy(): Promise<boolean> {
        if(this.db == null){
            throw new Error("DB has not connected yet");

        }
        return new Promise((resolve) => {
            this.db?.destroy(() =>{
                resolve(true);
            });
        });
    }

    public async pagination(
        queryBuilder: Knex.QueryBuilder,
        query: IAbstractQuery,
        options?: IMethodOptions,
    ): Promise<IPaginated>{
        const pagination: IPagination = {
            pageIndex: null,
            pageCount: null,
            timesPerPage: null,
            totalItems: null
        }

        if(options.allRecords){
            const list = await queryBuilder;
            return {
                list,
                pagination
            };
        }
    }

}