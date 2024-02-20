// מקבל את הערך המקורי והאוביקט של הפעולה, וצריך להחזיר את הערך החדש
export const serviceReducer = (services, action) => {
    const { type } = action;

    switch (type) {
        case 'load': {
            return action.value;
        }
       case 'edit':
        return services.map(service => {
            if (service.id === action.id) {
                return {
                    ...service,
                    edit: true,
                }
            }
            return service;
        });
        default:
            return services;
    }
}