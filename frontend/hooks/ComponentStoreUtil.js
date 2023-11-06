import { useSelector } from "react-redux";
import { ComponentType } from "../util/ComponentType";

function useGetCategoryType() {
    const components = useSelector((state) => state.components);
    return ComponentType.fromStr(components.currentCategory);
}

export { useGetCategoryType };