import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`
const Menu = () => {
    return(
        <Container>
                <MenuItem title="Home" icon="home" active/>
                <MenuItem title="Patient" icon="patient-clipboard" />
                <MenuItem title="Inventory" icon="" />
                <MenuItem title="Transaction" icon="file-multiple" />
        </Container>
    )
}
export default Menu;