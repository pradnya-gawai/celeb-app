import { Trash, XCircle } from '@phosphor-icons/react'
import React from 'react'

 const Delete=({deleteBoxShow ,id })=> {
    return (
        <>
        <Trash size={18}  color='red' className='c-icon' onClick={() => deleteBoxShow(id)} />

        </>
    )
}
export default Delete
