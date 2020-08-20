import React, { useLayoutEffect } from 'react';
import { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button, Image, Table, thead, th, tr, td, tbody } from 'react-bootstrap';
import waterplant from '../images/plant.png';
import styled from 'styled-components';

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

    const cell = {
        backgroundColor: 'F5F5DC'

    }
    const imgStyle = {
        height: '150.25',
        width: '149px',
        text: 'center',
        
    }

    const water = {
        color: '#00BFFF'

    }

    const bg = {
        backgroundColor: '#FFB6C1',
        backgroundSize: 'cover',
        text:'center'

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

    const BtnSignup = styled.button`
    background: "#000000";
    color: '#FFE4C4;
    &:hover {
        color: #7FFF00 '
    }   
    font-size: 1em;
    font-weight: bold;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    position: absolute;
    right: 50px;
    `

    const BtnLogin = styled.button`
    background: "#000000";
    color: '#FFE4C4;
    &:hover {
        color: #7FFF00 '
    }   
    font-size: 1em;
    font-weight: bold;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    position: absolute;
    right: 150px;
    `



    return (


        <>
            <Container className='text-center' fluid>
                

                <div style={bg} className='text-center'>
                <BtnLogin> Login</BtnLogin>
                <BtnSignup> Signup</BtnSignup>
                    <h1 style={water} className='font-weight-bold fixed-top'>
                        Water Me
              </h1>


                    <br></br>
                    <br></br>
                    <br></br>
                    <Image style={imgStyle} src={waterplant} alt='plant watering by Icon Island from the Noun Project' rounded />
                </div>

                <Table style={tablebord} bordered>


                    <thead className='thead-light table-bordered' style={cell}>
                        <tr style={cell}>
                            <th style={planttext}>Type of Plant</th>
                            <th style={watertext}>Watering Frequency</th>
                            <th style={loctext}>Location</th>
                            <th style={needtext}>Time Left to Water</th>
                        </tr>
                    </thead>
                    <tbody style={cell}>
                        <tr>
                            <td style={planttext}>Azalea</td>
                            <td style={watertext}>Once a Week</td>
                            <td style={loctext}>1st plant to right of door</td>
                            <td style={needtext}>Yes, two days overdue</td>
                        </tr>
                        <tr>
                            <td style={planttext}>Zebra </td>
                            <td style={watertext}>Every Day</td>
                            <td style={loctext}>Inside next to TV</td>
                            <td style={needtext}>Yes, two days overdue</td>
                        </tr>
                        <tr>
                            <td style={planttext}>Schefflera</td>
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