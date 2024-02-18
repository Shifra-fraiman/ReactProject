// מקבל את הערך המקורי והאוביקט של הפעולה, וצריך להחזיר את הערך החדש
export const serviceReducer = (services, action) => {
    const { type } = action;

    switch (type) {
        case 'load': {
            return action.value;
        }
       

        default:
            return services;
    }
}