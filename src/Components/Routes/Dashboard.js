import React from 'react';
import Main from "../Dashboard/Main";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import {ThemeProvider} from 'styled-components';
import { GlobalStyles } from '../Dashboard/Style/global';
import {lightTheme,darkTheme } from "../Dashboard/Style/theme";
import {useThemeContext } from "../Context/themeContext";


const Dashboard = () =>{
  
    const {theme } = useThemeContext();
    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
           <Sidebar/>
           <Main/>
        </ThemeProvider> 
    )          
}

export default Dashboard;