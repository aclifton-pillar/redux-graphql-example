import {BOOK_FLIGHT} from "./booking-actions";


const bookFlight = (state: any, action: any) => {
    console.log(action);
    const updatedBookings = state.slice();

    const newBooking = {
        id: action.payload.id,
    };

    updatedBookings.push(newBooking);

    return updatedBookings;
};

const bookingReducers = (state: any[] = [], action: any) => {
    const reducers: any = {
        [BOOK_FLIGHT]: bookFlight,
    };

    const reducer = action ? reducers[action.type] : null;

    return reducer ? reducer(state, action) : state;
};

export default bookingReducers;