import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('products'));
        if (data) {
            setProducts(data);
            setFilteredProducts(data); 
        }
    }, []);

    const filterByCategory = (category) => {
        if (category === 'null') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(item => item.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <ProductContext.Provider value={{ filteredProducts, filterByCategory }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => useContext(ProductContext);
