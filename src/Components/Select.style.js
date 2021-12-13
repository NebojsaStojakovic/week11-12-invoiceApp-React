import styled from 'styled-components'
import ArrowIcon from '../assets/icon-arrow-down.svg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    color: ${props => props.theme.color.text.formLabel};
`
const SelectWrapper = styled.div`
    position: relative;
    margin-bottom: 24px;
    ::after {
        content: url(${ArrowIcon});
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }
`
const StyledSelect = styled.select`
    width: 100%;
    border: 1px solid ${props => props.theme.color.form.fieldBorder};
    border-radius: 4px;
    padding: 19px;
    background: ${props => props.theme.color.form.fieldBg};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    color: ${props => props.theme.color.text.heading};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    :focus {
        border: 1px solid #9277FF;
    }
`
export default function Select({options, value, onChange}) {

    return (
        <Wrapper>
            <Label htmlFor='Payment Terms'>Payment Terms</Label>
            <SelectWrapper>
                <StyledSelect value={value} onChange={onChange}>
                    {options.map((option) => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.name}
                            </option>
                        )
                    })}
                </StyledSelect>
            </SelectWrapper>
        </Wrapper>
    )
}