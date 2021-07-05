import React from 'react'
import { Button, Table } from "react-bootstrap";

const Tasks = () => {
    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>vikas</td>
                        <td>False</td>
                        <td><Button variant="danger">Delete</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>pankaj</td>
                        <td>False</td>
                        <td><Button variant="danger">Delete</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>sachin</td>
                        <td>False</td>
                        <td><Button variant="danger">Delete</Button></td>
                    </tr>
                </tbody>
            </Table>
            <Button variant="primary">Add Task</Button>
        </div>
    )
}

export default Tasks
