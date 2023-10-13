import "./build.css";

import Categories from "../components/Categories";
import SearchFilter from "../components/SearchFilter";
import Components from "../components/Components";

const Build = () => {

    return (
        <div id="build-wrapper">
            <div id="categories-bar">
                <Categories/>
            </div>
            <div id="main-content">
                <div id="search-filter">
                    <SearchFilter id="search-filter"/>
                </div>
                <div id="components-list">
                    <Components id="components-list"/>
                </div>
            </div>
        </div>
    );
}

export default Build;