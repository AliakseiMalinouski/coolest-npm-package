class CoolestNpmPackage<T extends Object> {
    store: T[] = [];

    get(idx: number): T | undefined {
        return this.store.find((elem, index) => index === idx);
    }

    set(value: T): void {
        this.store.push(value);
    }
}

export { CoolestNpmPackage };