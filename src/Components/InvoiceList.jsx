import React from 'react'
import Invoice from './Invoice'
import styled from 'styled-components'
import BackgroundImg from '../assets/illustration-empty.svg'

const InvoiceWrapper = styled.div ` 
    padding: 32px 0;

    @media screen and (min-width: 768px) {
		padding: 56px 0;
	}
    @media screen and (min-width: 1024px) {
		padding: 72px 0;
	}
`
const NoInvoiceWrapper = styled.div ` 
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px 0;
    img {
        margin-bottom: 40px;
    }
    h2 {
        margin-bottom: 20px;
        color: ${props => props.theme.color.text.heading};
    }
    p {
         color: ${props => props.theme.color.text.bodyA};
        text-align: center;
    }
    p > span {
        font-weight: 700;
    }
`
export default function InvoiceList({invoices, filters}) {
    
    const filteredInvoices = filters.length === 0 ? invoices: invoices.filter(invoice => filters.includes(invoice.status))
    return (
        <>
            <InvoiceWrapper>
                {
                    filteredInvoices.length !== 0 ?
                    filteredInvoices.map(invoice => <Invoice {...invoice} key={invoice.id} />)
                    : (<NoInvoiceWrapper>
                        <img src={BackgroundImg} alt="ilustration-empty" />
                        <h2>There is nothing here</h2>
                        <p>Create an invoice by clicking the <br /> <span>New</span> button and get started</p>
                    </NoInvoiceWrapper>)
                }
            </InvoiceWrapper>
        </>
    )
}