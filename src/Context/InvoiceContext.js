import React, { createContext, useState, useEffect } from 'react'
import invoiceMockData from "../mockdata/data.json"

export const InvoiceContext = createContext()

const invoiceDataLocal = JSON.parse(localStorage.getItem("invoices"))
const initialInvoices = invoiceMockData.map(inv => {
    return {...inv, 
        createdAt: new Date(inv.createdAt),
        paymentDue: new Date(inv.paymentDue)
    }
})

export function InvoiceProvider({ children }) {

    const [ invoices, setInvoices ] = useState(invoiceDataLocal || initialInvoices)

    const value = React.useMemo(() => ({
        invoices, setInvoices
    }), [invoices]);

    useEffect(() => {
        localStorage.setItem("invoices", JSON.stringify(invoices))
        document.title = `Invoices (${invoices.length})`
    }, [invoices])

    return (
        <InvoiceContext.Provider value={value}>
            {children}
        </InvoiceContext.Provider>
    )
}

InvoiceContext.displayName = "Invoice"