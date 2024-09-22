import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import Card from './Card'
import { fetchData } from './Helper'

export default function CelebList() {

    const [celebList, setCelebList] = useState([])
    useEffect(() => {
        fetchData(setCelebList);
    }, [])
    console.log(celebList, "celebList")

    return (
        <Accordion defaultActiveKey="0" flush>
            {celebList.map((Item) =>
                <Card celebInfo={Item} />)}

        </Accordion>
    )
}
