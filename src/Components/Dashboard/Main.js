import React from 'react';
import styled from 'styled-components';
import NavBar from './Navbar';

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`

const Main = () =>{
    return(
        <Container>
            <NavBar />
        </Container>
    )

}

export default Main;