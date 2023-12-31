import "./SearchFilter.css";

import { useForm } from "react-hook-form";
import { ComponentType } from "../../util/ComponentType";
import TemplatedFilter from "./TemplatedFilter";
import ExpandArrow from "./ExpandArrow";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useGetCategoryType } from "../../hooks/ComponentStoreUtil";
import { getVerifiedComponents, getVerifiedComponentsSearch } from "../../api/apiHandler";
import { clearAvailable, addAvailable } from "../../redux/componentSlice";

const SearchFilter = () => {
    const [isExpand, setIsExpand] = useState(false);

    const onExpand = (expand) => {
        setIsExpand(!expand);
    }    

    return (
        <div id="searchfilter-content">
            <span id="searchfilter-header">
                <h2>Search/Filter</h2>
                <div id="searchfilter-expand">
                    <ExpandArrow onExpand={onExpand} isExpanded={isExpand}/>
                </div>
            </span>
            { isExpand ? <><Search/> <Filter/></> : <></>}
        </div>
    );
}

const Search = () => {
    const currentComponents = useSelector(state => state.components.selectedComponents);
    const currentCategory = useGetCategoryType();
    const dispatch = useDispatch();

    const onSearch = (e) => {
        e.preventDefault();

        (async () => {
            const searchQuery = e.target['search-input'].value;

            let components = undefined;
            if (searchQuery == "") {
                components = await getVerifiedComponents(currentComponents, currentCategory);
            }
            else {
                components = await getVerifiedComponentsSearch(currentComponents, currentCategory, searchQuery);
            }
            dispatch(clearAvailable());
            for (const c of components) {
                dispatch(addAvailable(c));
            }

        })();
    }

    return (
        <form id="search-content" onSubmit={onSearch}>
            <input type="text" id="search-input" name="search-input"/>
            <button type="submit" id="search-button">Search</button>
        </form>
    );
}

const Filter = () => {
    const { register , handleSubmit } = useForm();
    const onFilter = (data) => {
        console.log(data);
    }

    const currCategory = useGetCategoryType();

    return (
        <form id="filter-content" onSubmit={handleSubmit(onFilter)}>
            <TemplatedFilter category={currCategory} register={register}/>
            <span>
                <label>Price Range</label>
                <span>
                    <label htmlFor="price-range-min">Min</label>
                    <input {...register("price-range-min")} type="number" placeholder="0" min="0" id="price-range-min" name="price-range-min"/>
                </span>
                <span>
                    <label htmlFor="price-range-max">Max</label>
                    <input {...register("price-range-max")} type="number" placeholder="9999" min="0" id="price-range-max" name="price-range-max"/>
                </span>
            </span>
            <button type="submit" id="filter-button">Filter</button>
        </form>
    );
}

export default SearchFilter;