import filterTemplates from "../../util/filtertemplates.json";
import { ComponentType } from "../../util/ComponentType";

const TemplatedFilter = ({category}) => {
    if (category == undefined) return (<></>);

    const filterTemplate = FindFilterTemplate(category);
    let components = [];

    for (let option of filterTemplate) {
        const optionId = GenerateIdFromName(option.name);
        const subComponents = GenerateInputComponent(option);
        const component = 
            <span key={`${optionId}-fields`}>
                {subComponents}
            </span>
        components.push(component);
    } 

    return (<>{components}</>);
}

export function FindFilterTemplate(componentType) {
    if (componentType == undefined || componentType == ComponentType.UNDEFINED) return;

    const template = filterTemplates.find((v) => ComponentType.fromStr(v.type) == componentType);
    return template.filterParams;
}

function GenerateInputComponent(option) {
    const id = `${GenerateIdFromName(option.name)}-field`;

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
                <input type={option.type} id={id} name={id} key={id}/>
            ];

        case "radio":
            let rbs = [];
            for (let v of option.values) {
                const subId = `${id}-${GenerateIdFromName(v)}`;
                rbs.push(
                    <span>
                        <label htmlFor={subId} key={`${subId}-label`}>{v}</label>
                        <input type={option.type} id={subId} name={id} key={subId}/>
                    </span>
                );
            } 
            return [
                <label key={id}>{option.name}</label>, ...rbs
            ];
        
        case "select":
            let options = [];
            for (let o of option.values) {
                const oId = `${id}-${GenerateIdFromName(o)}`;
                options.push(<option key={oId} value={oId}>{o}</option>);
            }

            return [
                <label htmlFor={id} key={`${id}-label`}>{option.name}</label>,
                <select name={id} id={id} key={id}>{options}</select>
            ];
        
        case "range":

    }

    return [];
}

function GenerateIdFromName(name) {
    // if (name == undefined) return;
    return name.toLowerCase().replace(" ", "-");
}

export default TemplatedFilter;