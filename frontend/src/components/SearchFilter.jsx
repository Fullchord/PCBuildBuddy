import "./SearchFilter.css";

import { ComponentType } from "../../util/ComponentType";
import TemplatedFilter from "./TemplatedFilter";

const SearchFilter = () => {
    return (
        <div id="searchfilter-content">
            <h2>Search/Filter</h2>
            <Search/>
            <Filter/>
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
    const onFilter = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <form id="filter-content" >
            <TemplatedFilter category={ComponentType.CPU}/>
            <span>
                <label>Price Range</label>
                <span>
                    <label htmlFor="price-range-min">Min</label>
                    <input type="number" min="0" id="price-range-min" name="price-range-min"/>
                </span>
                <span>
                    <label htmlFor="price-range-max">Max</label>
                    <input type="number" min="0" id="price-range-max" name="price-range-max"/>
                </span>
            </span>
            <button type="submit" id="filter-button" onClick={onFilter}>Filter</button>
        </form>
    );
}

export default SearchFilter;