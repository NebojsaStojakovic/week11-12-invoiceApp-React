import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import Avatar from '../assets/image-avatar.jpg'
import ThemeToggle from '../Components/ThemeToggle'

const HeaderStyle = styled.header ` 
    background-color: #373B53;
    height: 72px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    @media screen and (min-width: 1024px) {
        flex: 0 0 103px;
        height: auto;
        flex-direction: column;
        border-radius: 0 20px 20px 0;
        right: auto;
        position: static;
    }
`
const HeaderLogo = styled.div ` 
    height: 100%;
    width: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7C5DFA;
    border-radius: 0 20px 20px 0;
    position: relative;
    cursor: pointer;
    @media screen and (min-width: 1024px) {
        height: 103px;
        width: 100%;
    }
    &::after {
        content: '';
        position: absolute;
        height: 50%;
        bottom: 0;
        right: 0;
        width: 100%;
        border-radius: 20px 0 20px 0;
        background-color: #9277FF;
    }
    &::before {
        content: url(${Logo});
        z-index: 1;
    }
`
const HeaderIcons = styled.div ` 
    gap: 30px;
    display: flex;
    align-items: center;
    @media screen and (min-width: 1024px) {
        flex-direction: column;
    }
`
const AvatarImg = styled.img ` 
    content: url(${Avatar});
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin: 0 24px;
    @media screen and (min-width: 1024px) {
        height: 40px;
        width: 40px;
        margin: 24px 0;
    }
`
export default function Header({toggleTheme}) {
    return (
        <HeaderStyle>
            <HeaderLogo />
            <HeaderIcons>
                <ThemeToggle toggleTheme={toggleTheme} />
                <AvatarImg />
            </HeaderIcons>
        </HeaderStyle>
    )
}