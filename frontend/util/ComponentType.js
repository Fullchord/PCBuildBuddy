
export const ComponentType = Object.freeze({
    CPU: Symbol("CPU"),
    COOLER: Symbol("COOLER"),
    MEMORY: Symbol("MEMORY"),
    TOWER: Symbol("TOWER"), 
    GPU: Symbol("GPU"),
    MOTHERBOARD: Symbol("MOTHERBOARD"),
    PSU: Symbol("PSU"),
    STORAGE: Symbol("STORAGE"),
    UNDEFINED: Symbol("Undefined Component"),

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

