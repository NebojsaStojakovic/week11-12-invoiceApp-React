import React from 'react'
import styled from 'styled-components'
import ArrowLeft from '../assets/icon-arrow-left.svg'
import { Link } from 'react-router-dom'

export const GoBackLinkWrapper = styled.div`
    display: flex;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${props => props.theme.color.text.heading};
    gap: 24px;
    align-items: center;
    margin-left: ${({margin}) => margin ? margin : "24px"};
    img {
        height: 9px;
    }
    @media screen and (min-width: 768px) {
        margin-left: 0;
    }
`
const GoBackLink = ({mr, linkTo, onClick}) => {

    return (
        <Link to={linkTo || "/"} onClick={onClick}>
            <GoBackLinkWrapper margin={mr}>
                <img src={ArrowLeft} alt="arrow left" /> 
                <div>Go back</div>
            </GoBackLinkWrapper>
        </Link>
    )
}
export default GoBackLink