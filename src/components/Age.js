import React from 'react'
import { calculateAge } from './Helper'

export default function Age({ celebInfo,edit,handleInputChange }) {
    return (
        <div className='d-flex flex-column'>
            <label htmlFor="age" className="form-label age-label">Age</label>
            {edit ? <input type="text" className="form-control age-input" id="age" name="age"
                value={celebInfo?.age ? celebInfo?.age : calculateAge(celebInfo?.dob)}
                onChange={handleInputChange} />
                : <div className='me-4'>{celebInfo?.age ? celebInfo?.age : calculateAge(celebInfo?.dob)} </div>}
        </div>
    )
}
