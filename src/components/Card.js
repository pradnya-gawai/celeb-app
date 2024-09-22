import React from 'react'
import { Accordion } from 'react-bootstrap'
import "../assets/card.css"
import Name from './Name'
import ProfileImage from './ProfileImage'
import Age from './Age'
import Gender from './Gender'
import Country from './Country'
import Description from './Description'

export default function Card({ celebInfo }) {
    return (
        <Accordion.Item eventKey={celebInfo.id}>
            <Accordion.Header className='d-flex justify-content-space-around'>
                <ProfileImage celebInfo={celebInfo} />
                <Name celebInfo={celebInfo} /></Accordion.Header>
            <Accordion.Body className='d-flex flex-column'>
                <div className='card-body'>                 
                    <Age celebInfo={celebInfo} />
                    <Gender celebInfo={celebInfo} />
                    <Country celebInfo={celebInfo} />
                </div>
                <Description celebInfo={celebInfo} />
            </Accordion.Body>
        </Accordion.Item>
    )
}
