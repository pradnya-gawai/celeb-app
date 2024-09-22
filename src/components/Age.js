import React from 'react'
import { calculateAge } from './Helper'

export default function Age({ celebInfo }) {
    return (
        <div className='d-flex flex-column'>
            <label htmlFor="age" className="form-label age-label">Age</label>
            <input type="text" className="form-control age-input" id="age" name="age"
                value={celebInfo?.age ? celebInfo?.age : calculateAge(celebInfo?.dob)} />
        </div>
    )
}
