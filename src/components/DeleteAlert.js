import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function DeleteAlert({show,deleteBoxClose}) {

    return (
        <Modal show={show} onHide={deleteBoxClose} size="sm" centered>
            <Modal.Header closeButton>Are you  sure you want to delete ? </Modal.Header>
            <Modal.Footer>
                <Button variant="btn btn-light" onClick={deleteBoxClose}>
                    Cancel
                </Button>
                <Button variant="btn btn-danger" onClick={deleteBoxClose}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
