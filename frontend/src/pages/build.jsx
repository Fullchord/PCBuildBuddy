import "./build.css";

import Header from "../components/header";
import Categories from "../components/Categories";
import SearchFilter from "../components/SearchFilter";
import Footer from "../components/footer";
import ComponentCollection from "../components/ComponentCollection";
import NextCategoryButton from "../components/NextCategoryButton";

const Build = () => {

    return (
        <main>
            <Header enableStickyHeader />
            <div id="build-wrapper">
                <div id="categories-bar">
                    <Categories/>
                </div>
                <div id="build-main-content">
                    <div id="search-filter">
                        <SearchFilter id="search-filter"/>
                    </div>
                    <div>
                        <ComponentCollection id="components-items"/>
                    </div>
                </div>
            </div>
            <NextCategoryButton/>
            <Footer/>
        </main>
    );
}

export default Build;