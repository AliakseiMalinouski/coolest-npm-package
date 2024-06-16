"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoolestNpmPackage = void 0;
class CoolestNpmPackage {
    constructor() {
        this.store = [];
    }
    get(idx) {
        return this.store.find((elem, index) => index === idx);
    }
    set(value) {
        this.store.push(value);
    }
}
exports.CoolestNpmPackage = CoolestNpmPackage;
//# sourceMappingURL=index.js.map