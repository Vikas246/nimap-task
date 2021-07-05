import React from 'react'
import { Dropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success">
                    Dropdown
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><NavLink className="dropdown-item" exact to="/home/vikya" >Action</NavLink ></Dropdown.Item>
                    <Dropdown.Item ><NavLink className="dropdown-item" exact to="/home/pakya">Another action</NavLink ></Dropdown.Item>
                    <Dropdown.Item ><NavLink className="dropdown-item" exact to="/home/jhutya">Something else</NavLink ></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <br />
            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </h6>
            <br />
            <br />
            <strong>Note: here should be the text related to selected drop down option</strong>
        </>
    );

}

export default Home;
