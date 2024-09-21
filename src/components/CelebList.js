import React from 'react'
import { Accordion } from 'react-bootstrap'
import Card from './Card'

export default function CelebList() {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />


        </Accordion>
    )
}
