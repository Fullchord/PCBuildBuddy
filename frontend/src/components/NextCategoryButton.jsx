import { useDispatch, useSelector } from "react-redux";
import "./NextCategoryButton.css";

import { incrementCategory, addSelected } from "../../redux/componentSlice";
import { useGetCategoryType } from "../../hooks/ComponentStoreUtil";
import { ComponentType } from "../../util/ComponentType";
import { useNavigate } from "react-router-dom";

const NextCategoryButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentCategory = useGetCategoryType();
    const currentComponent = useSelector(state => state.components.currentSelected);

    const onClick = () => {
        if (currentComponent == undefined) return;

        dispatch(addSelected(currentComponent));
        dispatch(incrementCategory());

        if (currentCategory == ComponentType.LAST) navigate("/bill");
    }

    let buttonText = "Next";
    if (currentCategory == ComponentType.LAST) buttonText = "Finish";

    return (
        <button id="next-category-button" onClick={onClick}>{buttonText}</button>
    )
}

export default NextCategoryButton;