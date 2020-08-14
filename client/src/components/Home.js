import React from 'react';
import {Container, Nav, Button, Image} from 'react-bootstrap';
import waterplant from '../images/plant.png';
function Home (props) {


    return(


        <>
        <Container> 

            <Image src= {waterplant} rounded/>
        </Container>
        </>
    )
}

export default Home;