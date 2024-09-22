import React from 'react'
import "../assets/card.css"


const  ProfileImage=({celebInfo}) =>{
    console.log(celebInfo.picture)
    return (
        <img src={celebInfo?.picture} className="img-fluid img-thumbnail" alt='No'/>
    )
}
export default ProfileImage
