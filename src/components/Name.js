import React from 'react'
import "../assets/card.css"


const Name =
    ({celebInfo})=> {
    return (
        <>
            <input type="text" className="form-control celeb-name ms-3" id="name" name="name" value={`${celebInfo.first} ${celebInfo.last}`} />
            {/* <div>
            {celebInfo.first} {celebInfo.last}
            </div> */}

        </>
    )
}
export default Name
