export const ordersReducer = (orders, action) => {
    const { type } = action;

    switch (type) {
        case 'load': {
            console.log("load!!");
            return action.value;
        }
        case 'sortByDate':
            return orders.sort((a, b) => {
                console.log("a: "+a);
                return (a.date).localeCompare(b.date);
            });
        case 'sortByCustomerName': {
            return orders.sort((a, b) => {
                let aLastName, bLastName, aFirstName, bFirstName, resultLastName, resultFirstName;
                if (a && b && a.customerDetails.lastName && b.customerDetails.lastName) {
                    console.log("lastName");
                    aLastName = a.customerDetails.lastName;
                    bLastName = b.customerDetails.lastName;
                    resultLastName = aLastName.localeCompare(bLastName);
                }

                if (a && b && a.customerDetails.firstName && b.customerDetails.firstName) {
                    console.log("firstName");
                    aFirstName = a.customerDetails.firstName;
                    bFirstName = b.customerDetails.firstName;
                    resultFirstName = aFirstName.localeCompare(bFirstName)
                }

                return resultLastName !== 0 ? resultLastName : resultFirstName;
            })
        }
        default:
            break;
    }
}