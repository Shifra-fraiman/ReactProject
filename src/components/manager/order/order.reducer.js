export const ordersReducer= (orders, action) => {
    const { type } = action;

    switch (type) {
        case 'load': {
            return action.value;
        }
       

        default:
            return orders;
    }
}