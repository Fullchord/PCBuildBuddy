import "./SearchFilter.css";

import { useForm } from "react-hook-form";
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
    const { register , handleSubmit } = useForm();
    const onFilter = (data) => {
        console.log(data);
    }

    return (
        <form id="filter-content" onSubmit={handleSubmit(onFilter)}>
            <TemplatedFilter category={ComponentType.CPU} register={register}/>
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