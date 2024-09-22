import React from 'react'

export default function Description({ celebInfo, edit,handleInputChange }) {

    return (
        <>
            <label htmlFor="description" class="form-label mt-2">Description</label>
            {edit ? <textarea class="form-control description-input" id="description" rows="6" onChange={handleInputChange}>
                {celebInfo?.description}
            </textarea>
                : <p className='text-start'> {celebInfo?.description}</p>}

        </>
    )
}
