import { useState } from "react";
import PropTypes from 'prop-types';

const Search = ({ onSearchSubmit, setIsSearchOpen }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            onSearchSubmit(searchQuery); // Call the function passed as a prop
        }
    };

    return (
        <div className="pb-1"> 
            <form onSubmit={handleSubmit} onMouseLeave={() => setIsSearchOpen(false)}>
                <input
                    type="search"
                    placeholder="Search..."
                    className="input-search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchOpen(true)} // Open search when focused
                />
            </form>
        </div>
    );
};

Search.propTypes = {
    onSearchSubmit: PropTypes.func.isRequired,
    setIsSearchOpen: PropTypes.func.isRequired, // Add prop type for setIsSearchOpen
};

export default Search;