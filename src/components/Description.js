import React from 'react'

export default function Description({celebInfo}) {
    
    return (
        <>
            <label htmlFor="description" class="form-label mt-4">Description</label>
            <textarea class="form-control description-input" id="description" rows="10">
                {celebInfo?.description}
            </textarea>

        </>
    )
}
