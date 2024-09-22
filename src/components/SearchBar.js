import { MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

export default function SearchBar() {
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
            />
        </div>
    )
}
