import "./SearchFilter.css";

import { useForm } from "react-hook-form";
import { ComponentType } from "../../util/ComponentType";
import TemplatedFilter from "./TemplatedFilter";
import ExpandArrow from "./ExpandArrow";
import { useState } from "react";

import { useSelector } from "react-redux";
import { useGetCategoryType } from "../../hooks/ComponentStoreUtil";

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
    return (
        <form id="search-content">
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