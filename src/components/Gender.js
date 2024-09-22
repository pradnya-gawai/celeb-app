import React from 'react'
import { genderOptions } from './CONSTANT'

export default function Gender({ celebInfo, edit,handleInputChange }) {
    return (
        <div className='d-flex flex-column'>
            <label htmlFor="gender" className="form-label gender-label">Gender</label>
            {edit ? <select className="form-select gender-input" id="gender" name="gender"
                value={celebInfo?.gender}  onChange={handleInputChange}>
                <option selected >{celebInfo?.gender}</option>
                {genderOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select> : <div>{celebInfo?.gender}</div>}


        </div>

    )
}
