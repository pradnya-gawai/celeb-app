import React from 'react'
import "../assets/card.css"


const Name =
    ({ celebInfo, edit,handleInputChange }) => {
        return (
            <> {edit ? <input type="text" className="form-control celeb-name ms-3" id="name" name="name" value={celebInfo?.name}
            onChange={handleInputChange}
            />
                : <div className="ms-4">
                    {celebInfo.first} {celebInfo.last}
                </div>
            }

            </>
        )
    }
export default Name
