import { useState, useEffect } from "react";
import { products } from "../assets/products";


const Search =()=> {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
     
        const results = products.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchQuery]);


  return (
    <div>
        <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul>
            {filteredProducts.map(product => (
                <li key ={product.id}>{product.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Search