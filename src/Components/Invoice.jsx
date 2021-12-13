import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { formatDate } from "../utils/utils" 
import ArrowRight from '../assets/icon-arrow-right.svg'

const InvoiceSection = styled.section ` 
    padding: 24px;
    background-color: ${props => props.theme.color.invoiceItem.bg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    max-width: 340px;
    margin: 0 auto 16px;
	justify-content: space-between;
    @media screen and (min-width: 768px) {
        max-width: 672px;
        align-items: center;
        padding: 16px 24px;
        display: grid;
        grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 10px;
        gap: 20px;
    }
	@media screen and (min-width: 1024px) {
		max-width: 730px;
	}
    .clientName {
        color: ${props => props.theme.color.text.bodyB};
    }
`
const IdWrapper = styled.div ` 
	display: flex;
	align-items: center;
	margin-bottom: 10px;
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        order: -2;
    }
    .hashId {
        color: ${props => props.theme.color.text.formLabel};
    }
`
const ClientId = styled.span ` 
    font-weight: 700;
    text-transform: uppercase;
	margin-right: 110px;
    color: ${props => props.theme.color.text.heading};
    @media screen and (min-width: 768px) {
        margin: 0;
    }
`
const PaymentDue = styled.span ` 
	margin-right: 200px;
	position: relative;
	top: 14px;
    color: ${props => props.theme.color.text.formLabel};
    @media screen and (min-width: 768px) {
        margin: 0;
        position: initial;
        top: 0;
        order: -1;
    }
`
const TotalDue = styled.span ` 
	font-weight: bold;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: -0.8px;
	color: ${props => props.theme.color.text.heading};
	align-self: flex-end;
    @media screen and (min-width: 768px) {
        align-self: center;
        text-align: right;
        margin-right: 20px;
    }
`
export const PaymentStatusCont = styled.div ` 
	padding: 12px 12px;
	border-radius: 6px;
    max-width: 104px;
    min-width: 95px;
	display: flex;
	align-items: center;
	gap: 8px;
	justify-content: center;
	background-color: rgba(51, 214, 159, 0.06);
	${({status, theme}) => {
		switch (status) {
			case "draft":
                return theme.light ? "background-color: rgba(55, 59, 83, 0.06);" : "background-color: rgba(223, 227, 250, 0.06)"
			case "pending":
				return "background-color: rgba(255, 143, 0, 0.06);";
			case "paid":
				return "background-color: rgba(51, 214, 159, 0.06);";
		}
	}}
`
export const PaymentStatus = styled.span `
    color: #33D69F;
    text-transform: capitalize;
    font-weight: 700;
	${({status, theme}) => {
		switch (status) {
			case "draft":
                return theme.light ? "color: rgba(55, 59, 83, 1);" : "color: #DFE3FA"
			case "pending":
				return "color: rgba(255, 143, 0, 1);";
			case "paid":
				return "color: rgba(51, 214, 159, 1);";
			}
		}}
`
export const PaymentStatusDot = styled.div ` 
		height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: #33D69F;
		display: inline-block;
		${({status, theme}) => {
		switch (status) {
			case "draft":
				return theme.light ? "background-color: rgba(55, 59, 83, 1);" : "background-color: #DFE3FA";
			case "pending":
				return "background-color: rgba(255, 143, 0, 1);";
			case "paid":
				return "background-color: rgba(51, 214, 159, 1);";
			}
		}}
`
const ArrowDiv = styled.div ` 
    display: none;
    @media screen and (min-width: 768px) {
        display: inline-block;
    }
`
export default function Invoice({ id, total, status, clientName, paymentDue }) {

    const dateFormatted = formatDate(paymentDue)

    return (
        <Link to={"invoices/" + id}>
            <InvoiceSection>
                <IdWrapper>
                    <span className="hashId">#</span>
                    <ClientId>{id}</ClientId>
                </IdWrapper>
                <span className="clientName">{clientName}</span>
                <PaymentDue>Due {dateFormatted}</PaymentDue>
				<TotalDue>£ {total}</TotalDue>
				<PaymentStatusCont status={status}>
					<PaymentStatusDot status={status} />
                    <PaymentStatus status={status} >
                        {status} 
                    </PaymentStatus>
                </PaymentStatusCont>
                <ArrowDiv>
                    <img src={ArrowRight} alt="arrow-right" />
                </ArrowDiv>
            </InvoiceSection>
        </Link>
    )
}