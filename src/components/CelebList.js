import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import Card from './Card'
import { fetchData } from './Helper'

export default function CelebList({celebList,setCelebList,deleteBoxShow}) {


    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) { setCelebList(JSON.parse(storedData)) }
        else {
            fetchData(setCelebList)
        }
    }, [])


    return (
        <Accordion defaultActiveKey="0" flush>
            {celebList?.map((Item) =>
                <Card celebInfo={Item} setCelebList={setCelebList} deleteBoxShow={deleteBoxShow} />)}
        </Accordion>
    )
}
