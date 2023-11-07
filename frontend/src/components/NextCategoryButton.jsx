import { useDispatch, useSelector } from "react-redux";
import "./NextCategoryButton.css";

import { incrementCategory } from "../../redux/componentSlice";

const NextCategoryButton = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(incrementCategory());
    }

    return (
        <button id="next-category-button" onClick={onClick}>Next</button>
    )
}

export default NextCategoryButton;