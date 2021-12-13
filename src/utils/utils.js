export const getItemId = (function () {
    let count = 0
    return function () {
        return count++;
    }
})()

export const getInvoiceId = (function () {
    let count = 0
    return function () {
        return count++;
    }
})()

export const getDateFromDifference = (date, difference) => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() + parseInt(difference))
    return new Date(newDate)
}

export const formatDate = date => new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
})
