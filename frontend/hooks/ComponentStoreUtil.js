import { useSelector, useDispatch } from "react-redux";
import { ComponentType } from "../util/ComponentType";
import { resetCurrentCategory } from "../redux/componentSlice";

function useGetCategoryType() {
    const components = useSelector((state) => state.components);
    return ComponentType.fromStr(components.currentCategory);
}

function useResetComponentStore() {
    const dispatch = useDispatch();
    dispatch(resetCurrentCategory());
}

export { useGetCategoryType, useResetComponentStore };