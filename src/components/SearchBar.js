import React,{useState} from 'react'

import { MagnifyingGlass } from '@phosphor-icons/react'

export default function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value); // Call the function to update the search term in the parent component
    };
    return (
        <div className="input-group mb-3 search-box">
            <div className="input-group-prepend">
                <span className="input-group-text" id="search-icon">
                    <MagnifyingGlass size={32} />
                </span>
            </div>
            <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="search-icon"
                onChange={handleChange}
            />
        </div>
    )
}
