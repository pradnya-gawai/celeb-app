import React from 'react'

export default function Country({ celebInfo, edit,handleInputChange }) {
    return (
        <div className='d-flex flex-column'>
            <label htmlFor="country" className="form-label country-label">Country</label>
            {edit ? <input type="text" className="form-control country-input" id="country" name="country" onChange={handleInputChange}
                value={celebInfo?.country} />
                : <div className='me-4'>{celebInfo?.country}</div>}
        </div>
    )
}
