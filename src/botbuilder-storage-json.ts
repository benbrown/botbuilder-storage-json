import {
    Storage, StoreItems
} from "botbuilder";
import * as Store from "jfs";


export class JSONStorage implements Storage {

    private db: Store;

    constructor(path: string = './state.json') {
        this.db = new Store(path);
    }

    public async read(keys: string[]): Promise<StoreItems> {
        return new Promise<StoreItems>((resolve: any, reject: any): void => {
            const data: StoreItems = {};
            keys.forEach((key: string) => {
                console.log('load ', key);
                const item: any = this.db.getSync(key);
                console.log('retrieved', item);
                if (item) {
                    data[key] = JSON.parse(item.value);
                }
            });
            resolve(data);
        });
    }

    public async write(changes: StoreItems): Promise<void> {
        return new Promise<void>((resolve: any, reject: any): void => {
            Object.keys(changes).forEach((key: any) => {
                const newItem: any = changes[key];
                this.db.saveSync(key, {value: JSON.stringify(newItem)});
            });
            resolve();
        });
    }

    public async delete(keys: string[]): Promise<void> {
        return new Promise<void>((resolve: any, reject: any): void => {
            keys.forEach((key: string) => this.db.delete(key));
            resolve();
        });
    }

}