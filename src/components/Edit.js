import { CheckCircle, PencilSimple, XCircle } from '@phosphor-icons/react'
import React from 'react'

const Edit = ({ setEdit, edit }) => {
    const editHandler = () => {
        setEdit(!edit)
    }
    return (
        <div>{edit ?
            <>
            <XCircle size={18} color='red' className='c-icon' />
            <CheckCircle size={18} color='green' className='c-icon' />
            </> :
            <PencilSimple size={18} color='blue' className='c-icon' onClick={editHandler} />}
             </div>
    )
}
export default Edit
