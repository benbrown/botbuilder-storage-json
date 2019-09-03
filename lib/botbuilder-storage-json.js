"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Store = require("jfs");
class JSONStorage {
    constructor(path = './state.json') {
        this.db = new Store(path);
    }
    read(keys) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const data = {};
                keys.forEach((key) => {
                    console.log('load ', key);
                    const item = this.db.getSync(key);
                    console.log('retrieved', item);
                    if (item) {
                        data[key] = JSON.parse(item.value);
                    }
                });
                resolve(data);
            });
        });
    }
    write(changes) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Object.keys(changes).forEach((key) => {
                    const newItem = changes[key];
                    this.db.saveSync(key, { value: JSON.stringify(newItem) });
                });
                resolve();
            });
        });
    }
    delete(keys) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                keys.forEach((key) => this.db.delete(key));
                resolve();
            });
        });
    }
}
exports.JSONStorage = JSONStorage;
//# sourceMappingURL=botbuilder-storage-json.js.map