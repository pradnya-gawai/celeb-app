import { CheckCircle, PencilSimple, XCircle } from '@phosphor-icons/react'
import React from 'react'

const Edit = ({ setEdit, edit, updateRecord, celebInfo }) => {
    const editHandler = () => {
        setEdit(!edit)
    }
    return (
        <div>{edit ?
            <>
                <XCircle size={18} color='red' className='c-icon' onClick={editHandler} />
                <CheckCircle size={18} color='green' className='c-icon' onClick={() => {
                    updateRecord()
                    editHandler();
                }} />
            </> :
            <PencilSimple size={18} color='blue' className='c-icon' onClick={editHandler} />}
        </div>
    )
}
export default Edit
