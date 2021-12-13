import React from 'react'
import { useState, useEffect } from 'react'
import styled, { ThemeProvider  } from 'styled-components'
import {GlobalStyles} from './GlobalStyles'
import { light, dark } from '../Styles/Themes'
import Header from "../Header";

const WrapperStyle = styled.div ` 
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.color.body.bg};
    min-height: 100vh;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
`
function Wrapper({children}) {
    const [theme, setTheme] = useState('light')
	useEffect(() => {
		if (localStorage.getItem('theme') === undefined) {
			localStorage.setItem('theme', 'light')
		}
		setTheme(localStorage.getItem('theme'))
	}, [setTheme])
    function toggleTheme() {
		localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
        setTheme(localStorage.getItem('theme'))
    }
    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
        <WrapperStyle>
            <GlobalStyles />
            <Header toggleTheme={toggleTheme}/>
            {children}
        </WrapperStyle>
        </ThemeProvider>
    )
}
export default Wrapper