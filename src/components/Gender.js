import React from 'react'
import { genderOptions } from './CONSTANT'

export default function Gender({ celebInfo }) {
    return (
        <div className='d-flex flex-column'>
            <label for="gender" className="form-label gender-label">Gender</label>
            <select className="form-select gender-input" id="gender" name="gender"
                value={celebInfo?.gender} >
                <option selected >{celebInfo?.gender}</option>
                {genderOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

        </div>

    )
}
