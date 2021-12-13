import React, { useState, useContext } from 'react'
import InvoiceList from './InvoiceList'
import { InvoiceContext } from '../Context/InvoiceContext'
import { Button } from './Styles/Components.style'
import IconPlus from '../assets/icon-plus.svg'
import styled from 'styled-components'
import FilterArrow from '../assets/icon-arrow-down.svg'
import IconCheck from '../assets/icon-check.svg'
import Form from "./Form.jsx"

const IconPlusCont = styled.div ` 
    background-color: #fff;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    background-image: url(${IconPlus});
    background-repeat: no-repeat;
    background-position: 11px 11px;
    margin-right: 15px;
`
const NewInvoiceBtn = styled(Button) ` 
    display: flex;
    align-items: center;
    padding: 8px 15px 8px 8px;
    margin-left: 18px;
    span {
        display: none;
        @media screen and (min-width: 768px) {
            display: inline-block;    
            font-weight: 700;
            color: #fff;
            margin-left: 4px;
            position: relative;
        }
    }
`
const NewInvoiceHeader = styled.div ` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 100px auto 0 auto;
    width: 100%;
    @media screen and (min-width: 768px) { 
        margin: 100px auto 0 auto;
    }
    @media screen and (min-width: 1024px) { 
        margin: 72px auto 0 auto;
    }
    .newInvoiceTitle {
        color: ${props => props.theme.color.text.heading};
        margin-bottom: 8px;
    }
    .newInvoiceDesc {
        color: ${props => props.theme.color.text.bodyA};
    }
`
const NewInvoiceHeaderFilter = styled.div ` 
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const InvoicesFilterMob = styled.span ` 
    display: none;
    @media screen and (min-width: 768px) { 
        display: inline-block;
        margin-left: 4px;
    }
`
const InvoicesFilterContainer = styled.div ` 
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &>div:first-child {
        display: flex;
        align-items: center;
        cursor: pointer;
        span {
            font-weight: 700;
            color: ${props => props.theme.color.text.heading};
        }
        span:last-child {
            margin-left: 16px;
        }
    }
`
const FilterArrowDown = styled.span ` 
    background-image: url(${FilterArrow});
    display: block; 
    background-repeat: no-repeat;
    background-position: center center;
    width: 12px;
    height: 12px;
    ${({rotateArrow}) => {
        return rotateArrow && 'transform: rotate(180deg);';
    }}
`
const CheckboxModal = styled.div ` 
    position: absolute;
    top: 25px;
    left: -105px;
    background-color: ${props => props.theme.color.dropdown.bg};
    border-radius: 8px;
    padding: 24px;
    width: 190px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 0px 10px 20px ${props => props.theme.color.dropdown.shadow};
    z-index: 1;
    @media screen and (min-width: 1024px) {
         left: -50px;
    }
    label {
        display: flex;
        gap: 10px;
        align-items: baseline;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: -0.25px;
        color: #1E2139;
        cursor: pointer;
    }
    input {
        position:relative;
        top: 2px;
        display: none;
        :hover + span {
            border: 1px solid #7C5DFA;
        }
        :checked + span {
            background: #7C5DFA;
            > img {
                opacity: 1;
            }
        }
    }
    span {
        color: ${props => props.theme.color.text.heading};
        font-weight: 700;
        text-transform: capitalize;
        margin-bottom: -1px;
    }
`
const Checkbox = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border: 1px solid transparent;
    border-radius: 2px;
    background: ${props => props.theme.color.checkbox.bg};
    img {
        opacity: 0;
    }
`
const NewInvoiceWrapper = styled.div ` 
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    max-width: 327px;
    @media screen and (min-width: 768px) {
        max-width: 672px;
    }
    @media screen and (min-width: 1024px) {
        max-width: 730px;
    }
`
const InvoicesWrapper = props => {
    const [filters, setFilters] = useState([])
    const {invoices} = useContext(InvoiceContext)
    const [showFilterModal, setShowFilterModal] = useState(false)
    const [formOpen, setFormOpen] = useState(false)
    const handleNewItemClick = () => setFormOpen(true)
    const handleFilterChange = filter => {
        const newFilters = [...filters]
        if(filters.includes(filter)){
            newFilters.splice(filters.indexOf(filter), 1)
        } else {
            newFilters.push(filter)
        }
        setFilters(newFilters)
    }
    const invoicesMessage = (num, filters) => {
    if (num === 0 && !filters) {
        return 'There are no invoices.'
    } else if (num === 0 && filters) {
        return `There are no ${filters} invoices.`
    } else if (num === 1 && !filters) {
        return 'There is 1 invoice.'
    } else if (num === 1 && filters) {
        return `There is 1 ${filters} invoice.`
    } else if (!filters) {
        return `There are ${num} total invoices.`
    } else {
        return `There are ${num} ${filters.join(", ")} invoices.`
    }
    } 
    const message = invoicesMessage(invoices && filters.length > 0 ? invoices.filter((item)=> filters.includes(item.status)).length : invoices.length, filters);

    return (
        <>
            {formOpen && <Form setFormOpen={setFormOpen} />}
            <NewInvoiceWrapper>
            <NewInvoiceHeader>
                <div>
                    <h2 className="newInvoiceTitle">Invoices</h2>
                    <span className="newInvoiceDesc">{message}</span>
                </div>
                <NewInvoiceHeaderFilter>
                    <InvoicesFilterContainer>
                        <div onClick={() => setShowFilterModal(!showFilterModal)} className="pointer"> <span className="newInvoiceFilterDesc">Filter </span> <InvoicesFilterMob> by status</InvoicesFilterMob>   <FilterArrowDown rotateArrow={showFilterModal}/> </div>
                        {showFilterModal && <CheckboxModal>
                            <label htmlFor="draft">
                                <input type="checkbox" name="draft" id="draft" value={filters.includes("draft")} onChange={e => handleFilterChange("draft")} /> 
                                <Checkbox className="checkbox">
                                    <img src={IconCheck} alt="icon-check"/>
                                </Checkbox>
                                <span>Draft</span>
                            </label>
                            <label htmlFor="pending">
                                <input type="checkbox" name="pending" id="pending" value={filters.includes("pending")} onChange={e => handleFilterChange("pending")} /> 
                                <Checkbox className="checkbox">
                                    <img src={IconCheck} alt="icon-check"/>
                                </Checkbox>
                                <span>Pending</span>
                            </label>
                            <label htmlFor="paid">
                                <input type="checkbox" name="paid" id="paid" value={filters.includes("paid")} onChange={e => handleFilterChange("paid")} /> 
                                <Checkbox className="checkbox">
                                    <img src={IconCheck} alt="icon-check"/>
                                </Checkbox>
                                <span>Paid</span> 
                            </label>
                        </CheckboxModal>}              
                    </InvoicesFilterContainer>
                    <div>
                        <NewInvoiceBtn type="purple" onClick={handleNewItemClick}>
                            <IconPlusCont />
                            New<span>Invoice</span> 
                        </NewInvoiceBtn>
                    </div>
                </NewInvoiceHeaderFilter>
            </NewInvoiceHeader>
            <InvoiceList invoices={invoices} filters={filters} />
            </NewInvoiceWrapper>
        </>
    )
}

export default InvoicesWrapper