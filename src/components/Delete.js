import { Trash, XCircle } from '@phosphor-icons/react'
import React from 'react'

 const Delete=({deleteBoxShow})=> {
    return (
        <>
        <Trash size={18}  color='red' className='c-icon' onClick={deleteBoxShow}/>

        </>
    )
}
export default Delete
