import React from 'react'

export default function Country({celebInfo}) {
  return (
    <div className='d-flex flex-column'>
    <label htmlFor="country" className="form-label country-label">Country</label>
    <input type="text" className="form-control country-input" id="country" name="country"
        value={celebInfo?.country} />
</div>
)
}
