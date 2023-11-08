
export const ComponentType = Object.freeze({
    CPU: Symbol("CPU"),
    COOLER: Symbol("COOLER"),
    MOTHERBOARD: Symbol("MOTHERBOARD"),
    MEMORY: Symbol("MEMORY"),
    TOWER: Symbol("TOWER"), 
    GPU: Symbol("GPU"),
    STORAGE: Symbol("STORAGE"),
    PSU: Symbol("PSU"),
    UNDEFINED: Symbol("Undefined Component"),

    get FIRST() {
        return this.CPU;
    },

    get LAST() {
        return this.PSU;
    },

    get ORDER() {
        return [
            this.CPU,
            this.COOLER,
            this.MOTHERBOARD,
            this.MEMORY,
            this.TOWER,
            this.GPU,
            this.STORAGE,
            this.PSU,
        ];
    },

    fromStr(str) {
        if (str == undefined || typeof(str) != "string") return ComponentType.UNDEFINED;

        switch(str.toUpperCase()) {
            case "CPU": 
                return ComponentType.CPU;
            case "COOLER": 
                return ComponentType.COOLER;
            case "MEMORY": 
                return ComponentType.MEMORY;
            case "TOWER": 
                return ComponentType.TOWER;
            case "GPU": 
                return ComponentType.GPU;
            case "MOTHERBOARD": 
                return ComponentType.MOTHERBOARD;
            case "PSU": 
                return ComponentType.PSU;
            case "STORAGE": 
                return ComponentType.STORAGE;
            default:
                return ComponentType.UNDEFINED;
        }
    },

    getStringRep(c) {
        if (c == undefined) return "";

        const stringTable = [
            [ComponentType.CPU, "CPU"],
            [ComponentType.COOLER, "COOLER"],
            [ComponentType.MEMORY, "MEMORY"],
            [ComponentType.TOWER, "TOWER"], 
            [ComponentType.GPU, "GPU"],
            [ComponentType.MOTHERBOARD, "MOTHERBOARD"],
            [ComponentType.PSU, "PSU"],
            [ComponentType.STORAGE, "STORAGE"],
            [ComponentType.UNDEFINED, "UNDEFINED"]
        ];
        const result = stringTable.find((ste) => ste[0] == c)[1];
        return result || "";
    }
});

