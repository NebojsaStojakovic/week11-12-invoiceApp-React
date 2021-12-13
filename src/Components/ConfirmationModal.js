import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom';
import { Button } from './Styles/Components.style';

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`
const ModalContent = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    padding: 32px;
    max-width: 480px;
    margin: 0 24px;
    h2 {
        font-size: 20px;
        line-height: 160%;
        letter-spacing: -0.416667px;
        color: #0C0E16;
    }
    p {
        margin-top: 8px;
        font-weight: 500;
        font-size: 13px;
        line-height: 22px;
        letter-spacing: -0.25px;
        color: #888EB0;
    }
    @media screen and (min-width: 768px) {
        padding: 48px;
        h2 {
            font-size: 24px;
            line-height: 32px;
        }
    }
`
const ButtonContainer = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`
export default function ConfirmationModal({ invoiceId, deleteInvoice, setModalOpen }) {

    const navigate = useNavigate()
    const handleDeleteClick = () => {
        deleteInvoice()
        setModalOpen(false)
        navigate("/")
    }
    const closeModal = e => setModalOpen(false)
    return ReactDOM.createPortal(
        <ModalWrapper onClick={closeModal}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete invoice {invoiceId}? This action cannot be undone.</p>
                <ButtonContainer>
                    <Button type="edit" onClick={closeModal}>Cancel</Button>
                    <Button type="delete" onClick={handleDeleteClick}>Delete</Button>
                </ButtonContainer>
            </ModalContent>
        </ModalWrapper>
    , document.getElementById("portal"))
}