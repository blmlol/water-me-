import React, { useLayoutEffect } from 'react';
import { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button, Image, Table, thead, th, tr, td, tbody } from 'react-bootstrap';
import waterplant from '../images/plant.png';


function Home(props) {



    const calcTime = (freq) => {

        let current = new Date();


        var timeLeft = {
            hours: current.getHours(),
            minutes: current.getMinutes(),
            seconds: current.getSeconds()
        };

        return timeLeft;
    }


    console.log(calcTime());

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
        }, 1000);

    }, []);


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

    const headtext = {
        color: '#7B68EE',
        fontWeight: 'bold'
    }

    const planttext = {
        color: '#DA70D6',
        fontWeight: 'bold'
    }
    const tablebord = {
        border: 'solid 2px'
    }

    const nametext = {
        color: '#FF4500',
        fontWeight: 'bold'
    }

    const watertext = {
        color: '#4169E1',
        fontWeight: 'bold'
    }

    const loctext = {
        color: '#A0522D',
        fontWeight: 'bold'
    }

    const needtext = {
        color: '#2E8B57',
        fontWeight: 'bold'
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

                <Table style={tablebord} bordered hover>
                    <thead className='thead-dark' >
                        <tr  >
                            <th style={headtext}>Type of Plant</th>
                            <th style={headtext}>Plant Name</th>
                            <th style={headtext}>Watering Frequency</th>
                            <th style={headtext}>Location</th>
                            <th style={headtext}>Time Left to Water</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={planttext}>Azalea</td>
                            <td style={nametext}>Polly</td>
                            <td style={watertext}>Once a Week</td>
                            <td style={loctext}>1st plant to right of door</td>
                            <td style={needtext}>Yes, two days overdue</td>
                        </tr>
                        <tr>
                            <td style={planttext}>Zebra </td>
                            <td style={nametext}>Jakey</td>
                            <td style={watertext}>Every Day</td>
                            <td style={loctext}>Inside next to TV</td>
                            <td style={needtext}>Yes, two days overdue</td>
                        </tr>
                        <tr>
                            <td style={planttext}>Schefflera</td>
                            <td style={nametext}>Sarah</td>
                            <td style={watertext}>Once every 2 weeks</td>
                            <td style={loctext}>Inside my room</td>
                            <td style={needtext}>Yes, two days overdue</td>

                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Home;