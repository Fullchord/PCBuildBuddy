import "./build.css";

import Header from "../components/header";
import Categories from "../components/Categories";
import SearchFilter from "../components/SearchFilter";
import ComponentCard from "../components/ComponentCard";
import Footer from "../components/footer";

const Build = () => {

    return (
        <main>
            <Header/>
            <div id="build-wrapper">
                <div id="categories-bar">
                    <Categories/>
                </div>
                <div id="main-content">
                    <div id="search-filter">
                        <SearchFilter id="search-filter"/>
                    </div>
                    <div id="components-list">
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                        <ComponentCard id="components-items"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default Build;