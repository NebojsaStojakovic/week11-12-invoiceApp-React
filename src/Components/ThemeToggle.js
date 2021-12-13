import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const Button = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    position: relative;
     &::after {
        content: '';
        position: absolute;
        right: -24px;
        top: -28px;
        width: 1px;
        background-color: #494E6E;
        height: 72px;
        @media screen and (min-width: 1024px) {
            right: 10px;
            top: 0;
            transform: rotate(90deg);
            height: 103px;
        }
    }
`
const Icon = styled.img`
    border-radius: 50%;
`
export default function ThemeToggle({ className, toggleTheme }) {
    const theme = useContext(ThemeContext)

    return (
        <Button className={className} onClick={toggleTheme}>
            <Icon src={theme.icon.path} alt={theme.icon.alt}/>
        </Button>
    )
}