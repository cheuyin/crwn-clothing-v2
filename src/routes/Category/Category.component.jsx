import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard.component";

import "./Category.styles.scss";

const Category = () => {
    const { category } = useParams();
    // useSelector runs every time the root reducer state changes
    // components using useSelector re-render only when the useSelector produces different values
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState([]);

    console.log("render/re-rendering component")

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className="category-title">{category}</h2>
            <div className="category-container">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </>
    );
};

export default Category;
