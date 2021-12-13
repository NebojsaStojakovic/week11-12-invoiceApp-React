import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 24px;
    padding: 17px 24px;
    font-weight: 700;
    font-size: 12px;
    background-color: ${({theme, type}) => {
        switch (type){
            case "purple":
                return "#7C5DFA"
            case "edit":
                return theme.light ? "#252945" : "#F9FAFE"
            case "draft":
                return theme.light ? "#373B53" : "#373B53"
            case "delete":
                return "#EC5757"
            case "new-item":
                return "#F9FAFE"
            default:
                return "black"
        }
    }};
    color: ${({theme, type}) => {
        switch (type){
            case "purple":
                return "#FFF"
            case "edit":
                return theme.dark ? "#DFE3FA" : "#7E88C3"
            case "draft":
                return theme.dark ? "#DFE3FA" : "#888EB0"
            case "delete":
                return "#fff"
            case "new-item":
                return "#7E88C3"
            default:
                return "white"
        }
    }};
    &:hover {
        background-color: ${({theme, type}) => {
            switch (type){
                case "purple":
                    return "#9277FF"
                case "edit":
                    return theme.dark ? "#FFFFFF" : "#DFE3FA"
                case "draft":
                    return theme.dark ? "#0C0E16" : "#1E2139"
                case "delete":
                    return "#FF9797"
                case "new-item":
                    return "#DFE3FA"
                default:
                    return "gray"
            }
        }};
    }
`