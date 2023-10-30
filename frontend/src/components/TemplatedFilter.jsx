import filterTemplates from "../../util/filtertemplates.json";
import { ComponentType } from "../../util/ComponentType";

const TemplatedFilter = ({category, register}) => {
    if (category == undefined || register == undefined) return (<></>);

    const filterTemplate = FindFilterTemplate(category);
    let components = [];

    for (let option of filterTemplate) {
        const optionId = GenerateIdFromName(option.name);
        const subComponents = GenerateInputComponent(option, register);
        const component = 
            <span key={`${optionId}-fields`}>
                {subComponents}
            </span>;
        components.push(component);
    } 

    return (<>{components}</>);
}

function FindFilterTemplate(componentType) {
    if (componentType == undefined || componentType == ComponentType.UNDEFINED) return;

    const template = filterTemplates.find((v) => ComponentType.fromStr(v.type) == componentType);
    return template.filterParams;
}

function GenerateInputComponent(option, register) {
    const optionId = GenerateIdFromName(option.name);
    const id = `${optionId}-field`;
    switch(option.type) {
        case "checkbox":
        case "color":
        case "email":
        case "file":
        case "hidden":
        case "image":
        case "month":
        case "number":
        case "password":
        case "tel":
        case "time":
        case "url":
        case "week":
            return [
                <label htmlFor={id} key={`${id}-label`}>{option.name}</label>,
                <input {...register(optionId)} type={option.type} id={id} name={id} key={id}/>
            ];

        case "radio":
            let rbs = [];
            for (let v of option.values) {
                const subId = `${id}-${GenerateIdFromName(v)}`;
                rbs.push(
                    <label htmlFor={subId} key={`${subId}-label`}>{v}</label>,
                    <input {...register(optionId)} 
                        type={option.type} 
                        key={subId} 
                        id={subId} 
                        value={GenerateIdFromName(v)}
                    />
                );
            } 
            return [
                <label key={id}>{option.name}</label>, ...rbs
            ];
        
        case "select":
            let options = [];
            for (let o of option.values) {
                const oId = `${id}-${GenerateIdFromName(o)}`;

                if (o == null) {
                    options.push(
                        <option key={oId} value="none">None</option>
                    );
                    continue;
                }

                options.push(<option key={oId} value={GenerateIdFromName(o)}>{o}</option>);
            }

            return [
                <label htmlFor={id} key={`${id}-label`}>{option.name}</label>,
                <select {...register(optionId)} id={id} key={id}>{options}</select>
            ];
        
        case "numeric-range":
            const min = option.min;
            const max = option.max;
            let defaultMin = min;
            let defaultMax = max;
            if (min == undefined || max == undefined) return <>NUMERIC RANGE ERROR</>;

            if (option.default != undefined && option.default.min != undefined) 
                defaultMin = option.default.min;
            if (option.default != undefined && option.default.max != undefined)
                defaultMax = option.default.max;

            return [
                <label key={`${id}-label`}>{option.name}</label>,
                <label htmlFor={`${id}-min`} id={`${id}-min-label`}>Min</label>,
                <input {...register(`${optionId}-min`)} type="number" placeholder={min} id={`${id}-min`} min={min} max={max}/>,
                <label htmlFor={`${id}-min`} id={`${id}-min-label`}>Max</label>,
                <input {...register(`${optionId}-max`)} type="number" placeholder={max} id={`${id}-max`} min={min} max={max}/>
            ];
    }

    return [];
}

function GenerateIdFromName(name) {
    if (name == undefined || name == null) {
        return "null";
    }

    let n = name.toString().toLowerCase().replace(" ", "-");
    
    let openP = n.indexOf("(");
    while (openP != -1) {
        const closeP = n.indexOf(")");
        if (closeP == -1) {
            console.error("Malformed name in filterTemplates.json. Check for parentheses.");
            return "PARENTHESES-ERROR-IN-FILTER-TEMPLATE";
        }

        const n0 = n.slice(0, openP - 1);
        const n1 = n.slice(closeP + 1, n.length);

        n = n0 + n1;
        openP = n.indexOf("(");
    }

    return n;
}

export default TemplatedFilter;