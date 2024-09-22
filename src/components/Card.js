import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import "../assets/card.css"
import Name from './Name'
import ProfileImage from './ProfileImage'
import Age from './Age'
import Gender from './Gender'
import Country from './Country'
import Description from './Description'
import Edit from './Edit'
import Delete from './Delete'
import { initialCelebInfo } from './CONSTANT'
import DeleteAlert from './DeleteAlert'

export default function Card({ celebInfo, setCelebList,deleteBoxShow }) {
    const [edit, setEdit] = useState(false)
    const [cardPayload, setCardPayload] = useState(initialCelebInfo)
    useEffect(() => {
        if (celebInfo) {
            setCardPayload({ ...celebInfo, name: `${celebInfo.first} ${celebInfo.last}` });
        }
    }, [celebInfo]);
    // delete Box

    // Common handleInputChange function
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardPayload({
            ...cardPayload,
            [name]: value,
        });
    };
    useEffect(() => {
        console.log(cardPayload, "cardPayload")
    }, [cardPayload])
    const updateRecord = () => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            const [firstName, lastName] = cardPayload.name.split(" ")
            const data = JSON.parse(storedData);
            const updatedData = data.map(item =>

                item.id === cardPayload.id ? { ...cardPayload, first: firstName, last: lastName } : item // Update the specific record
            );
            // Save the updated data back to local storage
            localStorage.setItem('userData', JSON.stringify(updatedData));
            setCelebList(updatedData); // Update state to reflect changes
        }
    };

    return (
        <Accordion.Item eventKey={celebInfo.id}>
            <Accordion.Header className='d-flex justify-content-space-around'
                onClick={(e) => e.stopPropagation()} // Prevent closing
            >
                <ProfileImage celebInfo={celebInfo} edit={edit} />
                <Name celebInfo={cardPayload} edit={edit} handleInputChange={handleInputChange} /></Accordion.Header>
            <Accordion.Body className='d-flex flex-column'>
                <div className='card-body'>
                    <Age celebInfo={cardPayload} edit={edit} handleInputChange={handleInputChange} />
                    <Gender celebInfo={cardPayload} edit={edit} handleInputChange={handleInputChange} />
                    <Country celebInfo={cardPayload} edit={edit} handleInputChange={handleInputChange} />
                </div>
                <Description celebInfo={cardPayload} edit={edit} handleInputChange={handleInputChange} />
                <div className='card-actions'>
                    <Edit setEdit={setEdit} edit={edit} handleInputChange={handleInputChange} updateRecord={updateRecord} celebInfo={cardPayload} />
                    {!edit &&
                        <Delete deleteBoxShow={deleteBoxShow} />
                    }
                </div>

            </Accordion.Body>
        </Accordion.Item>
        
    )
}
