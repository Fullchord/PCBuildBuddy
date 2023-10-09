import "./SearchFilter.css";

const SearchFilter = () => {
    return (
        <div id="searchfilter-content">
            Search and Filter
            <Search/>
            <Filter/>
        </div>
    );
}

const Search = () => {
    return (
        <div id="search-content">
            Search
        </div>
    );
}

const Filter = () => {
    return (
        <div id="filter-content">
            Filter
        </div>
    );
}

export default SearchFilter;