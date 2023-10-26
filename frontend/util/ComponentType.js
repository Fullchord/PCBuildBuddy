
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
    }
});
