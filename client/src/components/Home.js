import React from 'react';
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import waterplant from '../images/plant.png';


function Home(props) {
    const style = {
        height: '150.25',
        width: '149px'
    }

    const water = {
        color: '#00BFFF'

    }

    const bg = {
        backgroundColor: '#FFB6C1',
        backgroundSize: 'cover'
      
    }

    const buttext = {
        color: '#4B0082'
    }

    return (


        <>
            <Container style={bg} className='text-center' fluid>

                <Button style={buttext} variant='outline-primary' className='float-left m-2 font-weight-bold'> Login</Button>
                <Button style={buttext} variant='outline-primary' className='float-left m-2 font-weight-bold'> Signup</Button>

                <h1 style={water} className='font-weight-bold fixed-top'>
                    Water Me
              </h1>

                <br></br>
                <br></br>
                <br></br>
                <Image style={style} src={waterplant} alt='plant watering by Icon Island from the Noun Project' rounded />


            </Container>
        </>
    )
}

export default Home;