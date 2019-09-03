import { Storage, StoreItems } from "botbuilder";
export declare class JSONStorage implements Storage {
    private db;
    constructor(path?: string);
    read(keys: string[]): Promise<StoreItems>;
    write(changes: StoreItems): Promise<void>;
    delete(keys: string[]): Promise<void>;
}
