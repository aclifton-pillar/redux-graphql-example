import { BOOK_FLIGHT } from './booking-actions';


export const bookFlight = (id: any) => {
    console.log('booked: ' + id);
    return (dispatch: any) => {
        dispatch({
            type: BOOK_FLIGHT,
            payload: {id: id}
        });
        return null;
    }
};