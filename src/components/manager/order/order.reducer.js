export const ordersReducer = (orders, action) => {
    const { type } = action;

    switch (type) {
        case 'load': {
            return action.value;
        }
        case 'sortByDate':
            return orders.sort((a, b) => {
                return Date.parse(a.date).localeCompare(Date.parse(b.date));
            });
        case 'sortByCustomerName':{
            // const collator = new Intl.Collator(selected, { sensitivity: "base" });
            return orders.sort((a, b) => {
                console.log("a: "+a+" b: "+b);
                console.log("a: "+a.customerDetails.lastName+" b: "+b.customerDetails.lastName);
                // const result = a?.firstName.localeCompare(b?.firstName);
                return /*result !== 0 ? result :*/(a!=undefined && b!=undefined)? (a.customerDetails.lastName!=undefined && b.customerDetails.lastName!=undefined)? (String.fromCharCode(a.customerDetails.lastName.a)).localeCompare(String.fromCharCode(b.customerDetails.lastName)): orders: orders;
            });
            break;
        }
        default:
            return orders;
    }
}